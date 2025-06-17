/*
  Warnings:

  - The values [TWITTER] on the enum `Socials` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Socials_new" AS ENUM ('GOOGLE');
ALTER TABLE "Tutor" ALTER COLUMN "social" TYPE "Socials_new" USING ("social"::text::"Socials_new");
ALTER TABLE "Student" ALTER COLUMN "social" TYPE "Socials_new" USING ("social"::text::"Socials_new");
ALTER TYPE "Socials" RENAME TO "Socials_old";
ALTER TYPE "Socials_new" RENAME TO "Socials";
DROP TYPE "Socials_old";
COMMIT;
