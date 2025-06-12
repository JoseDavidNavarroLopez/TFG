CREATE TABLE `configuraciones` (
  `id_config` INT NOT NULL AUTO_INCREMENT,
  `clave` VARCHAR(255) NOT NULL UNIQUE,
  `valor` TEXT NOT NULL,
  PRIMARY KEY (`id_config`)
);

CREATE TABLE `usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `fecha_registro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `ultima_actividad` TIMESTAMP,
  PRIMARY KEY (`id_usuario`)
);

CREATE TABLE `conversaciones` (
  `id_conversacion` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT,
  `fecha_inicio` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `fecha_ultimo_mensaje` TIMESTAMP,
  `estado` VARCHAR(50) DEFAULT 'en curso',
  PRIMARY KEY (`id_conversacion`),
  INDEX `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `conversaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `intents` (
  `id_intent` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` TEXT,
  PRIMARY KEY (`id_intent`)
);

CREATE TABLE `logs_actividad` (
  `id_log` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT,
  `accion` VARCHAR(255) NOT NULL,
  `fecha` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_log`),
  INDEX `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `logs_actividad_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `mensajes` (
  `id_mensaje` INT NOT NULL AUTO_INCREMENT,
  `id_conversacion` INT,
  `emisor` VARCHAR(50) NOT NULL,
  `mensaje` TEXT NOT NULL,
  `fecha` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_mensaje`),
  INDEX `id_conversacion_idx` (`id_conversacion`),
  CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`id_conversacion`) REFERENCES `conversaciones`(`id_conversacion`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `respuestas` (
  `id_respuesta` INT NOT NULL AUTO_INCREMENT,
  `id_intent` INT,
  `respuesta` TEXT NOT NULL,
  `tipo_respuesta` VARCHAR(50),
  PRIMARY KEY (`id_respuesta`),
  INDEX `id_intent` (`id_intent`),
  CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_intent`) REFERENCES `intents`(`id_intent`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
