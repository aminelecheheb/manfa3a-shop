/*
  Warnings:

  - Made the column `oldPrice` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `colors` VARCHAR(191) NULL,
    MODIFY `oldPrice` INTEGER NOT NULL;
