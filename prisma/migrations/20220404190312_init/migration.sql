-- AlterTable
ALTER TABLE `assessment` ADD COLUMN `LeadInterfaceManagement` INTEGER NULL,
    ADD COLUMN `LeadInterfaceManagementFile` VARCHAR(191) NULL,
    ADD COLUMN `costControl` INTEGER NULL,
    ADD COLUMN `costControlFile` VARCHAR(191) NULL,
    ADD COLUMN `deliverSuccessfulStartUp` INTEGER NULL,
    ADD COLUMN `deliverSuccessfulStartUpFile` VARCHAR(191) NULL,
    ADD COLUMN `handOver` INTEGER NULL,
    ADD COLUMN `handOverFile` VARCHAR(191) NULL,
    ADD COLUMN `implementProcurement` INTEGER NULL,
    ADD COLUMN `implementProcurementFile` VARCHAR(191) NULL,
    ADD COLUMN `manageCosts` INTEGER NULL,
    ADD COLUMN `manageCostsFile` VARCHAR(191) NULL,
    ADD COLUMN `manageFabrication` INTEGER NULL,
    ADD COLUMN `manageFabricationFile` VARCHAR(191) NULL,
    ADD COLUMN `manageSchedulesAndResources` INTEGER NULL,
    ADD COLUMN `manageSchedulesAndResourcesFile` VARCHAR(191) NULL,
    ADD COLUMN `planningAndScheduling` INTEGER NULL,
    ADD COLUMN `planningAndSchedulingFile` VARCHAR(191) NULL;