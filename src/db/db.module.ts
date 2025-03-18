import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import * as process from 'node:process';

const pool = new Pool({
  user: 'nestuser',
  password: 'nestpassword',
  host: "localhost",
  port: 5432,
  database: "nestdb",
});

export const db = drizzle(pool, { schema });

@Module({
  providers: [{ provide: 'DATABASE', useValue: db }],
  exports: ['DATABASE'],
})
export class DatabaseModule {}
