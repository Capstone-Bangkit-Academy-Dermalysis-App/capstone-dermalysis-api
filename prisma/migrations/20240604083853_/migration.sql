/*
  Warnings:

  - You are about to drop the column `score` on the `Prediction` table. All the data in the column will be lost.
  - Added the required column `confidenceScore` to the `Prediction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Prediction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Prediction` DROP FOREIGN KEY `Prediction_diseaseId_fkey`;

-- DropForeignKey
ALTER TABLE `Prediction` DROP FOREIGN KEY `Prediction_userId_fkey`;

-- AlterTable
ALTER TABLE `Prediction` DROP COLUMN `score`,
    ADD COLUMN `confidenceScore` DOUBLE NOT NULL,
    ADD COLUMN `label` VARCHAR(191) NOT NULL,
    ADD COLUMN `message` VARCHAR(191) NULL,
    MODIFY `userId` VARCHAR(191) NULL,
    MODIFY `diseaseId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Prediction` ADD CONSTRAINT `Prediction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prediction` ADD CONSTRAINT `Prediction_diseaseId_fkey` FOREIGN KEY (`diseaseId`) REFERENCES `Disease`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
