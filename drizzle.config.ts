import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql', // ✅ Keep "postgresql"
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!) || 5432,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: false,
  },
});
