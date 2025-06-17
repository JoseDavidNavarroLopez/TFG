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
router.post("/ia", chatConIA);
router.post("/historial", obtenerHistorialChats);
router.get("/:id", obtenerChatPorId);
router.post("/conver", guardarNuevaConversacion); 
router.get("/test", (req, res) => {
  res.send("Ruta /api/chat/test funcionando");
});

module.exports = router;
