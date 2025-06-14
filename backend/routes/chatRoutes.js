const express = require("express");
const router = express.Router();
const {
  procesarMensaje,
  obtenerHistorialChats, // <-- Asegúrate de importar la nueva función
} = require("../controllers/chatController");

// Ruta para procesar mensajes (POST)
router.post("/", procesarMensaje);

// Ruta para obtener historial de chats por email (GET)
router.post("/", obtenerHistorialChats);

module.exports = router;
