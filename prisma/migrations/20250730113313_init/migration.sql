/*
  Warnings:

  - Added the required column `date` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
