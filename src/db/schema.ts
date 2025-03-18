import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const children = pgTable('children', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});
