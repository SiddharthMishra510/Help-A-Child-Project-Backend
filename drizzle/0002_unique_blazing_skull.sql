ALTER TABLE "children" ADD COLUMN "photo" text NOT NULL;--> statement-breakpoint
ALTER TABLE "children" ADD COLUMN "hobbies" text[] NOT NULL;--> statement-breakpoint
ALTER TABLE "children" ADD COLUMN "career_goal" text NOT NULL;--> statement-breakpoint
ALTER TABLE "children" ADD COLUMN "amount_donated" integer DEFAULT 0 NOT NULL;