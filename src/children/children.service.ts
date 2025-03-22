import { Child } from './interfaces/child.interface';
import { db } from '../db/db.module';
import { children } from '../db/schema';
import { Inject, ConflictException } from '@nestjs/common';
import { eq } from 'drizzle-orm';

export class ChildrenService {
  constructor(@Inject('DATABASE') private readonly database: typeof db) {}

  async create(child: Child): Promise<Child> {

    const existingChild = await this.database
      .select()
      .from(children)
      .where(eq(children.id, child.id))
      .limit(1);

    if (existingChild.length > 0) {
      throw new ConflictException(`Child with ID ${child.id} already exists.`);
    }

    const [newChild] = await this.database
      .insert(children)
      .values(child)
      .returning();

    return newChild;
  }

  findAll(): Promise<Child[]> {
    return this.database.select().from(children);
  }

  async deleteAll() {
    await this.database.delete(children);
  }
}
