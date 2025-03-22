ALTER TABLE "children" ALTER COLUMN "photo" SET DEFAULT 'default-photo.jpg';--> statement-breakpoint
ALTER TABLE "children" ALTER COLUMN "hobbies" SET DEFAULT '{"No hobbies listed"}';--> statement-breakpoint
ALTER TABLE "children" ALTER COLUMN "career_goal" SET DEFAULT 'Not specified';