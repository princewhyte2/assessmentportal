-- AlterTable
ALTER TABLE `project` ADD COLUMN `capexSize` VARCHAR(191) NULL,
    ADD COLUMN `capexSizeNote` VARCHAR(191) NULL,
    ADD COLUMN `flyingHours` VARCHAR(191) NULL,
    ADD COLUMN `flyingHoursNote` VARCHAR(191) NULL,
    ADD COLUMN `jcp` VARCHAR(191) NULL,
    ADD COLUMN `jcpNote` VARCHAR(191) NULL,
    ADD COLUMN `remark` VARCHAR(191) NULL,
    ADD COLUMN `training` VARCHAR(191) NULL,
    ADD COLUMN `trainingNote` VARCHAR(191) NULL;
