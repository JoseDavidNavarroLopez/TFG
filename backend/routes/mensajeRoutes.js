const express = require("express");
const router = express.Router();

const { crearConversacion, guardarMensaje } = require("../controllers/guardarMensajeYConversacion");

// Ruta para crear nueva conversación
router.post("/conversacion", crearConversacion);

// Ruta para guardar mensaje en conversación existente
router.post("/mensajes", guardarMensaje);

module.exports = router;

