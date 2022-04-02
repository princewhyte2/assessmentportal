-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `refIndicator` VARCHAR(191) NULL,
    `jobTitle` VARCHAR(191) NULL,
    `yrsOfExp` VARCHAR(191) NULL,
    `projects` JSON NULL,
    `priSkillPool` VARCHAR(191) NULL,
    `secSkillPool` VARCHAR(191) NULL,
    `lastApprovedProjectLevel` VARCHAR(191) NULL,
    `education` JSON NULL,
    `supervisor` VARCHAR(191) NULL,

    UNIQUE INDEX `Project_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
