import { Injectable } from "@nestjs/common";
import { db } from "../db/db.module";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  async findByEmail(email: string): Promise<User | null> {
    const usersList = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    return usersList.length > 0 ? usersList[0] : null;
  }
}
