-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `productName` VARCHAR(191) NOT NULL,
    `productPrice` INTEGER NOT NULL,
    `livraison` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NULL,
    `quantity` INTEGER NOT NULL,
    `state` VARCHAR(191) NOT NULL DEFAULT 'new',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
