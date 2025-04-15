-- CreateTable
CREATE TABLE `Motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `motorista_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motoristaId` INTEGER NULL,
    `data` DATETIME(3) NOT NULL,
    `produto` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_motorista_id_fkey` FOREIGN KEY (`motorista_id`) REFERENCES `Motorista`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_motoristaId_fkey` FOREIGN KEY (`motoristaId`) REFERENCES `Motorista`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
