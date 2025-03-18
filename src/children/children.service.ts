import { Child } from './interfaces/child.interface';
import { db } from '../db/db.module';
import { children } from '../db/schema';
import { Inject } from '@nestjs/common';

export class ChildrenService {
  constructor(@Inject('DATABASE') private readonly database: typeof db) {}

  async create(child: Child): Promise<Child> {
    const [newChild] = await this.database.insert(children).values(child).returning();
    return newChild;
  }

  findAll(): Promise<Child[]> {
    return Promise.resolve(this.database.select().from(children));
  }
}
