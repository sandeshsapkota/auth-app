/*
  Warnings:

  - You are about to drop the column `email` on the `Account` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_email_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "email";
