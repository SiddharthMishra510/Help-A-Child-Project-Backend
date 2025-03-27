import { Module } from "@nestjs/common";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

export const db = drizzle(pool, { schema });

@Module({
  providers: [{ provide: "DATABASE", useValue: db }],
  exports: ["DATABASE"],
})
export class DatabaseModule {}
