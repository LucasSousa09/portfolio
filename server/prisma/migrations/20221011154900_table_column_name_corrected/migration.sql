/*
  Warnings:

  - You are about to drop the column `descrition` on the `Works` table. All the data in the column will be lost.
  - Added the required column `description` to the `Works` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Works" RENAME COLUMN "descrition" TO "description";
