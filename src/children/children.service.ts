import { Child } from "./interfaces/child.interface";
import { db } from "../db/db.module";
import { children } from "../db/schema";
import {
  Inject,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { eq } from "drizzle-orm";
import { CreateChildDto } from "./dto/create-child.dto";

export class ChildrenService {
  constructor(@Inject("DATABASE") private readonly database: typeof db) {}

  async create(child: CreateChildDto): Promise<Child> {
    const existingChild = await this.database
      .select()
      .from(children)
      .where(eq(children.name, child.name))
      .limit(1);

    if (existingChild.length > 0) {
      throw new ConflictException(
        `Child with name ${child.name} already exists.`,
      );
    }

    const [newChild] = await this.database
      .insert(children)
      .values({
        name: child.name,
        photo: child.photo,
        careerGoal: child.careerGoal,
        amountDonated: child.amountDonated,
      })
      .returning();

    return newChild;
  }

  findAll(): Promise<Child[]> {
    return this.database.select().from(children);
  }

  async deleteAll() {
    await this.database.delete(children);
  }

  async addDonation(id: string, amount: number): Promise<Child> {
    if (!amount || amount <= 0) {
      throw new BadRequestException("Invalid donation amount.");
    }

    const existingChild = await db
      .select()
      .from(children)
      .where(eq(children.id, id))
      .limit(1);

    if (existingChild.length === 0) {
      throw new NotFoundException(`Child with id ${id} not found.`);
    }

    const currentAmount = existingChild[0].amountDonated || 0;

    const updatedChild: Child[] = await db
      .update(children)
      .set({ amountDonated: currentAmount + amount })
      .where(eq(children.id, id))
      .returning();

    return updatedChild[0];
  }
}
