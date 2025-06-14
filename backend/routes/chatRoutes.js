const express = require("express");
const router = express.Router();
const {
  procesarMensaje,
  obtenerHistorialChats, 
  obtenerChatPorId,
} = require("../controllers/chatController");

router.post("/", procesarMensaje);
router.post("/historial", obtenerHistorialChats);
router.get("/:id", obtenerChatPorId); 


module.exports = router;
