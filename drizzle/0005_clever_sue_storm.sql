-- Step 1: Add a new UUID column
ALTER TABLE children ADD COLUMN new_id UUID DEFAULT gen_random_uuid();

-- Step 2: Populate the new column with random UUIDs
UPDATE children SET new_id = gen_random_uuid();

-- Step 3: Drop the old numeric id column
ALTER TABLE children DROP COLUMN id;

-- Step 4: Rename the new column to id
ALTER TABLE children RENAME COLUMN new_id TO id;
