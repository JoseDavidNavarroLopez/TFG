const express = require("express");
const router = express.Router();

const { crearConversacion, guardarMensaje } = require("../controllers/guardarMensajeYConversacion");

// Ruta para crear nueva conversación


// Ruta para guardar mensaje en conversación existente
router.post("/", guardarMensaje);

module.exports = router;

