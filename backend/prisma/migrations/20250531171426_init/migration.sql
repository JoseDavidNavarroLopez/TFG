-- CreateTable
CREATE TABLE `configuraciones` (
    `id_config` INTEGER NOT NULL AUTO_INCREMENT,
    `clave` VARCHAR(255) NOT NULL,
    `valor` TEXT NOT NULL,

    UNIQUE INDEX `configuraciones_clave_key`(`clave`),
    PRIMARY KEY (`id_config`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversaciones` (
    `id_conversacion` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `fecha_inicio` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_ultimo_mensaje` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `estado` VARCHAR(50) NULL DEFAULT 'en curso',

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_conversacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `intents` (
    `id_intent` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`id_intent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs_actividad` (
    `id_log` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `accion` VARCHAR(255) NOT NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_log`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mensajes` (
    `id_mensaje` INTEGER NOT NULL AUTO_INCREMENT,
    `id_conversacion` INTEGER NULL,
    `emisor` VARCHAR(50) NOT NULL,
    `mensaje` TEXT NOT NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_conversacion`(`id_conversacion`),
    PRIMARY KEY (`id_mensaje`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `respuestas` (
    `id_respuesta` INTEGER NOT NULL AUTO_INCREMENT,
    `id_intent` INTEGER NULL,
    `respuesta` TEXT NOT NULL,
    `tipo_respuesta` VARCHAR(50) NULL,

    INDEX `id_intent`(`id_intent`),
    PRIMARY KEY (`id_respuesta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `fecha_registro` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ultima_actividad` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `conversaciones` ADD CONSTRAINT `conversaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `logs_actividad` ADD CONSTRAINT `logs_actividad_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mensajes` ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`id_conversacion`) REFERENCES `conversaciones`(`id_conversacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `respuestas` ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_intent`) REFERENCES `intents`(`id_intent`) ON DELETE NO ACTION ON UPDATE NO ACTION;
