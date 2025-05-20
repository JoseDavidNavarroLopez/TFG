// routes/chat.js
const express = require("express");
const router = express.Router();
//const { getChatbotResponse } = require("../services/openai");
const { procesarMensaje } = require("../controllers/chatController");

/*router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) return res.status(400).json({ error: "Mensaje vacío" });

    const response = await getChatbotResponse(message);

    res.json({ response });
  } catch (error) {
    console.error("❌ Error al procesar el mensaje:", error); // <-- LOG REAL
    res.status(500).json({ error: "Error interno del servidor" });
  }
});*/

router.post("/", procesarMensaje);


module.exports = router;
