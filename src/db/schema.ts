import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const children = pgTable("children", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  photo: text("photo").notNull().default("default-photo.jpg"),
  careerGoal: text("career_goal").notNull().default("Not specified"),
  amountDonated: integer("amount_donated").default(0).notNull(),
});
