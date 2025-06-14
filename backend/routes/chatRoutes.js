const express = require("express");
const router = express.Router();
const {
  procesarMensaje,
  obtenerHistorialChats, 
} = require("../controllers/chatController");

router.post("/", procesarMensaje);

router.post("/historial", obtenerHistorialChats);

module.exports = router;
