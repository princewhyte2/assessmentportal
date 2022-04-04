/*
  Warnings:

  - Added the required column `email` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL;
