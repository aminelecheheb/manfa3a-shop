/*
  Warnings:

  - Added the required column `oldPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `oldPrice` INTEGER NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;
