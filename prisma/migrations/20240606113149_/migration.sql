/*
  Warnings:

  - You are about to drop the column `label` on the `Prediction` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Prediction` table. All the data in the column will be lost.
  - Added the required column `label` to the `Disease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Disease` table without a default value. This is not possible if the table is not empty.
  - Made the column `diseaseId` on table `Prediction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Prediction` DROP FOREIGN KEY `Prediction_diseaseId_fkey`;

-- AlterTable
ALTER TABLE `Disease` ADD COLUMN `label` VARCHAR(191) NOT NULL,
    ADD COLUMN `latinName` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Prediction` DROP COLUMN `label`,
    DROP COLUMN `message`,
    ADD COLUMN `suggestion` VARCHAR(191) NULL,
    MODIFY `diseaseId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Prediction` ADD CONSTRAINT `Prediction_diseaseId_fkey` FOREIGN KEY (`diseaseId`) REFERENCES `Disease`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
