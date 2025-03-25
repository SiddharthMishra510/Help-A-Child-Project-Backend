import { pgTable, text, integer, uuid, serial } from "drizzle-orm/pg-core";

export const children = pgTable("children", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  photo: text("photo").notNull().default("default-photo.jpg"),
  careerGoal: text("career_goal").notNull().default("Not specified"),
  amountDonated: integer("amount_donated").default(0).notNull(),
  donationRequired: integer("donation_required").default(0).notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
});
