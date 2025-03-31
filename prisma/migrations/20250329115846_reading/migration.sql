/*
  Warnings:

  - Added the required column `readingName` to the `Reading_Variant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reading_Variant" ADD COLUMN     "readingName" TEXT NOT NULL;
