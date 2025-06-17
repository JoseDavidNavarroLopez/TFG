const express = require("express");
const router = express.Router();
const {
  procesarMensaje,
  obtenerHistorialChats, 
  obtenerChatPorId,
  guardarNuevaConversacion,
  chatConIA,
} = require("../controllers/chatController");

router.post("/", procesarMensaje);
router.post("/historial", obtenerHistorialChats);
router.get("/:id", obtenerChatPorId);
router.post("/conver", guardarNuevaConversacion); 
router.post("/chat", chatConIA);

module.exports = router;
