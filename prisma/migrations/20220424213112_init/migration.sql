-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `projectLevel` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Department_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `implementProcurement` INTEGER NULL,
    `manageFabrication` INTEGER NULL,
    `costControl` INTEGER NULL,
    `planningAndScheduling` INTEGER NULL,
    `deliverSuccessfulStartUp` INTEGER NULL,
    `handOver` INTEGER NULL,
    `manageSchedulesAndResources` INTEGER NULL,
    `manageCosts` INTEGER NULL,
    `LeadInterfaceManagement` INTEGER NULL,
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
    `implementProcurementFile` VARCHAR(191) NULL,
    `manageFabricationFile` VARCHAR(191) NULL,
    `costControlFile` VARCHAR(191) NULL,
    `planningAndSchedulingFile` VARCHAR(191) NULL,
    `deliverSuccessfulStartUpFile` VARCHAR(191) NULL,
    `handOverFile` VARCHAR(191) NULL,
    `manageSchedulesAndResourcesFile` VARCHAR(191) NULL,
    `manageCostsFile` VARCHAR(191) NULL,
    `LeadInterfaceManagementFile` VARCHAR(191) NULL,
    `evaluateAndFrameOpportunitiesLineEntry` INTEGER NULL,
    `deliverCommercialValueLineEntry` INTEGER NULL,
    `costEstimatingLineEntry` INTEGER NULL,
    `projectRiskManagementLineEntry` INTEGER NULL,
    `probablisticCostLineEntry` INTEGER NULL,
    `driveProjectPerformanceLineEntry` INTEGER NULL,
    `leveragePortfolioBenefitLineEntry` INTEGER NULL,
    `projectPortfolioBenchmarkingLineEntry` INTEGER NULL,
    `manageDesignEngineeringLineEntry` INTEGER NULL,
    `developProjectExecutionStrategiesAndPlansLineEntry` INTEGER NULL,
    `contractAndContractorManagementLineEntry` INTEGER NULL,
    `setUpLeadProjectTeamsLineEntry` INTEGER NULL,
    `workEfficientlyWithStakeholdersLineEntry` INTEGER NULL,
    `manageProjectComplexitiesLineEntry` INTEGER NULL,
    `manageQualityLineEntry` INTEGER NULL,
    `implementProcurementLineEntry` INTEGER NULL,
    `manageFabricationLineEntry` INTEGER NULL,
    `planningAndSchedulingLineEntry` INTEGER NULL,
    `manageCostsLineEntry` INTEGER NULL,
    `costControlLineEntry` INTEGER NULL,
    `deliverSuccessfulStartUpLineEntry` INTEGER NULL,
    `handOverLineEntry` INTEGER NULL,
    `evaluateAndFrameOpportunitiesAssessorEntry` INTEGER NULL,
    `deliverCommercialValueAssessorEntry` INTEGER NULL,
    `costEstimatingAssessorEntry` INTEGER NULL,
    `projectRiskManagementAssesorEntry` INTEGER NULL,
    `probablisticCostAssessorEntry` INTEGER NULL,
    `driveProjectPerformanceAssesorEntry` INTEGER NULL,
    `leveragePortfolioBenefitAssesorEntry` INTEGER NULL,
    `projectPortfolioBenchmarkingAssesorEntry` INTEGER NULL,
    `manageDesignEngineeringAssesorEntry` INTEGER NULL,
    `developProjectExecutionStrategiesAndPlansAssesorEntry` INTEGER NULL,
    `contractAndContractorManagementAssesorEntry` INTEGER NULL,
    `setUpLeadProjectTeamsAssessorEntry` INTEGER NULL,
    `workEfficientlyWithStakeholdersAssesorEntry` INTEGER NULL,
    `manageProjectComplexitiesAssesorEntry` INTEGER NULL,
    `manageQualityAssesorEntry` INTEGER NULL,
    `implementProcurementAssesorEntry` INTEGER NULL,
    `manageFabricationAssesorEntry` INTEGER NULL,
    `planningAndSchedulingAssesorEntry` INTEGER NULL,
    `manageCostsAssesorEntry` INTEGER NULL,
    `costControlAssesorEntry` INTEGER NULL,
    `deliverSuccessfulStartUpAssesorEntry` INTEGER NULL,
    `handOverAssesorEntry` INTEGER NULL,
    `leadInterfaceManagementLineEntry` INTEGER NULL,
    `leadInterfaceManagementAssesorEntry` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Assessment_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `refIndicator` VARCHAR(191) NULL,
    `jobTitle` VARCHAR(191) NULL,
    `yrsOfExp` VARCHAR(191) NULL,
    `priSkillPool` VARCHAR(191) NULL,
    `secSkillPool` VARCHAR(191) NULL,
    `lastApprovedProjectLevel` VARCHAR(191) NULL,
    `supervisor` VARCHAR(191) NULL,

    UNIQUE INDEX `Project_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `complexity` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `projectManageMentRole` VARCHAR(191) NULL,
    `orpPhases` VARCHAR(191) NULL,
    `challenges` VARCHAR(191) NULL,
    `details` VARCHAR(191) NULL,
    `resultsAchieved` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RelevantTrainings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `keyDate` DATETIME(3) NULL,
    `training` VARCHAR(191) NULL,
    `certificate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Educations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `keyDate` DATETIME(3) NULL,
    `education` VARCHAR(191) NULL,
    `certificate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CvAssessmentFiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `file` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assessment` ADD CONSTRAINT `Assessment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelevantTrainings` ADD CONSTRAINT `RelevantTrainings_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Educations` ADD CONSTRAINT `Educations_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CvAssessmentFiles` ADD CONSTRAINT `CvAssessmentFiles_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
