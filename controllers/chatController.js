const { OpenAI } = require("openai");
const prisma = require("../prisma.js");
const { getChatbotResponse } = require("../services/openai");

async function procesarMensaje(req, res) {
  const { userId, message } = req.body;


  console.log("procesarMensaje llamado con body:", req.body);

  try {
    // 1. Buscar o crear conversación
    const conversation = await prisma.conversaciones.findFirst({
      where: {
        id_usuario: userId,
        estado: "en curso",
      },
    });

    let conversationId;

    if (!conversation) {
      const nuevaConversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: userId,
        },
      });
      conversationId = nuevaConversacion.id_conversacion;
    } else {
      conversationId = conversation.id_conversacion;
    }

    if (message.trim() === "!reset" || message.trim() === "!reiniciar") {
      if (conversationId) {
        await prisma.conversaciones.update({
          where: { id_conversacion: conversationId },
          data: { estado: "finalizada" }
        });
      }
      return res.json({ respuesta: "Conversación reiniciada. Puedes empezar de nuevo." });
    }

    // 2. Cargar historial
    const mensajes = await prisma.mensajes.findMany({
      where: {
        id_conversacion: conversationId,
      },
      orderBy: {
        fecha: 'asc',
      },
    });

    // 3. Preparar para OpenAI
    const chatHistory = mensajes.map((m) => ({
      role: m.emisor === 'user' ? 'user' : 'assistant',
      content: m.mensaje,
    }));





    // Añadir nuevo mensaje del usuario
    chatHistory.push({ role: "user", content: message });

    // 4. Llamar a OpenAI
    const responseContent = await getChatbotResponse([
      {
        role: "system",
        content:
          "Eres un asistente de viajes útil. Tu función es ayudar al usuario a organizar viajes al mejor precio, en base a sus requerimientos. Tu lenguaje debe ser SIEMPRE educado. Te llamas Vangevid. Siempre debes saludar diciendo: Buenos días, Soy Vangevid, tu asistente de viajes personal, en qué puedo ayudarte hoy?",
      },
      ...chatHistory,
    ]);

    await prisma.mensajes.create({
      data: {
        id_conversacion: conversationId,
        emisor: "assistant",
        mensaje: responseContent,
      },
    });

    res.json({ respuesta: responseContent });



    // 5. Guardar mensaje del usuario
    await prisma.mensajes.create({
      data: {
        id_conversacion: conversationId,
        emisor: "user",
        mensaje: nuevoMensajeDelUsuario,
      },
    });

    await prisma.mensajes.create({
      data: {
        id_conversacion: conversationId,
        emisor: "assistant",
        mensaje: response.choices[0].message.content,

      },
    });

    // 6. Guardar respuesta del bot
    await prisma.conversaciones.update({
      where: {
        id_conversacion: conversationId,
      },
      data: {
        fecha_ultimo_mensaje: new Date(),
      },
    });

    // 7. Responder al frontend



    res.json({ respuesta: respuestaDelBot });
  } catch (error) {
    console.error("Error al procesar mensaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  procesarMensaje,
};
