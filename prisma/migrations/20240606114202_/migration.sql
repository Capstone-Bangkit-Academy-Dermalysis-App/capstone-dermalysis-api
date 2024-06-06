/*
  Warnings:

  - The primary key for the `Disease` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Disease` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `diseaseId` on the `Prediction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Prediction` DROP FOREIGN KEY `Prediction_diseaseId_fkey`;

-- AlterTable
ALTER TABLE `Disease` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Prediction` MODIFY `diseaseId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Prediction` ADD CONSTRAINT `Prediction_diseaseId_fkey` FOREIGN KEY (`diseaseId`) REFERENCES `Disease`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
