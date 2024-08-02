/*
  Warnings:

  - You are about to alter the column `datetime` on the `bookings` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `bookings` MODIFY `datetime` DATETIME NOT NULL,
    MODIFY `notes` VARCHAR(191) NULL;
