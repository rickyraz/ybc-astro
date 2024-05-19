/*
  Warnings:

  - Added the required column `hexCode` to the `VariationColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VariationColor" ADD COLUMN     "hexCode" TEXT NOT NULL;
