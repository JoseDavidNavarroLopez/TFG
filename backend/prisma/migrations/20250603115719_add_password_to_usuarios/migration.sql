/*
  Warnings:

  - You are about to drop the column `password` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `password`,
    ADD COLUMN `contraseña` VARCHAR(255) NULL;
