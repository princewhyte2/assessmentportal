-- CreateTable
CREATE TABLE `Assessment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `evaluateAndFrameOpportunities` INTEGER NULL,
    `deliverCommercialValue` INTEGER NULL,
    `costEstimating` INTEGER NULL,
    `probablisticCost` INTEGER NULL,
    `driveProjectPerformance` INTEGER NULL,
    `projectRiskManagement` INTEGER NULL,
    `competitiveAndAffordableScope` INTEGER NULL,
    `leveragePortfolioBenefit` INTEGER NULL,
    `projectPortfolioBenchmarking` INTEGER NULL,
    `manageDesignEngineering` INTEGER NULL,
    `developProjectExecutionStrategiesAndPlans` INTEGER NULL,
    `contractAndContractorManagement` INTEGER NULL,
    `setUpLeadProjectTeams` INTEGER NULL,
    `workEfficientlyWithStakeholders` INTEGER NULL,
    `manageProjectComplexities` INTEGER NULL,
    `manageQuality` INTEGER NULL,
    `evaluateAndFrameOpportunitiesFile` VARCHAR(191) NULL,
    `deliverCommercialValueFile` VARCHAR(191) NULL,
    `costEstimatingFile` VARCHAR(191) NULL,
    `probablisticCostFile` VARCHAR(191) NULL,
    `driveProjectPerformanceFile` VARCHAR(191) NULL,
    `projectRiskManagementFile` VARCHAR(191) NULL,
    `competitiveAndAffordableScopeFile` VARCHAR(191) NULL,
    `leveragePortfolioBenefitFile` VARCHAR(191) NULL,
    `projectPortfolioBenchmarkingFile` VARCHAR(191) NULL,
    `manageDesignEngineeringFile` VARCHAR(191) NULL,
    `developProjectExecutionStrategiesAndPlansFile` VARCHAR(191) NULL,
    `contractAndContractorManagementFile` VARCHAR(191) NULL,
    `setUpLeadProjectTeamsFile` VARCHAR(191) NULL,
    `workEfficientlyWithStakeholdersFile` VARCHAR(191) NULL,
    `manageProjectComplexitiesFile` VARCHAR(191) NULL,
    `manageQualityFile` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Assessment_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Assessment` ADD CONSTRAINT `Assessment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;