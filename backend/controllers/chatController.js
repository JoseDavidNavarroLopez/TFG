const prisma = require("../prisma.js");
const { getChatbotResponse } = require("../services/openai");
const { detectIntentFromMessage } = require("../services/intent.js"); // lo crearás abajo

async function procesarMensaje(req, res) {
  const { userId, message } = req.body;
  try {
    // Obtener el valor de modo_mantenimiento desde la base de datos
    const configMantenimiento = await prisma.configuraciones.findUnique({
      where: { clave: "modo_mantenimiento" },
    });

    const modoMantenimiento = configMantenimiento?.valor === "true";

    if (modoMantenimiento) {
      // Si está en modo mantenimiento, devolver mensaje y no procesar más
      return res.status(503).json({
        mensaje: "El servicio está en mantenimiento. Por favor, inténtalo más tarde.",
      });
    }
    console.log("procesarMensaje llamado con body:", req.body);
    } catch (error) {
    console.error("Error al procesar mensaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }

  
  try {
    // Buscar conversación activa
    let conversation = await prisma.conversaciones.findFirst({
      where: {
        id_usuario: userId,
        estado: "en curso",
      },
    });

    // Si no existe, crear una nueva
    let isNewConversation = false;
    if (!conversation) {
      conversation = await prisma.conversaciones.create({
        data: {
          id_usuario: userId,
        },
      });
      await prisma.logs_actividad.create({
        data: {
          id_usuario: userId,
          accion: "Inicio de nueva conversación",
        },
      });

      isNewConversation = true;
    }

    const conversationId = conversation.id_conversacion;

    // Comando de reinicio
    if (message.trim() === "!reset" || message.trim() === "!reiniciar") {

      await prisma.conversaciones.update({
        where: { id_conversacion: conversationId },
        data: { estado: "finalizada" },
      });
      await prisma.logs_actividad.create({
        data: {
          id_usuario: userId,
          accion: "Reinicio de conversación con comando !reset",
        },
      });
      return res.json({ respuesta: "Conversación reiniciada. Puedes empezar de nuevo." });
    }

    // Guardar mensaje del usuario
    await prisma.mensajes.create({
      data: {
        id_conversacion: conversationId,
        emisor: "user",
        mensaje: message,
      },
    });
    await prisma.logs_actividad.create({
      data: {
        id_usuario: userId,
        accion: `Envió mensaje: "${message}"`,
      },
    });
    
    // Detectar y guardar intent si es una nueva conversación
    if (isNewConversation) {
      const intentName = await detectIntentFromMessage(message);

      let intent = await prisma.intents.findFirst({ where: { nombre: intentName } });
      if (!intent) {
        intent = await prisma.intents.create({
          data: {
            nombre: intentName,
            descripcion: `Detectado automáticamente desde el primer mensaje del usuario.`,
          },
        });
      }

      console.log(`Intent detectado: ${intent.nombre}`);
    }

    // Obtener historial
    const mensajes = await prisma.mensajes.findMany({
      where: {
        id_conversacion: conversationId,
      },
      orderBy: {
        fecha: "asc",
      },
    });

    const chatHistory = mensajes.map((m) => ({
      role: m.emisor === "user" ? "user" : "assistant",
      content: m.mensaje,
    }));

    chatHistory.push({ role: "user", content: message });

    // Cargar mensaje de bienvenida desde la base de datos
    const configBienvenida = await prisma.configuraciones.findFirst({
      where: { clave: "mensaje_bienvenida" },
    });

    const mensajeBienvenida = configBienvenida?.valor || 
    "Buenos días, Soy AteneAI, tu asistente de viajes personal";

    // Obtener configuración de temperatura
    let modoMatematico = req.body.modoMatematico ?? false;
    let temperatura;
    // ESPERANDO AL FRONT PARA CREAR LA VARIABLE MODOMATEMATICO DEBE SER UN BOOLEANO 
    if(!modoMatematico){
      const configTemperatura = await prisma.configuraciones.findFirst({
        where: { clave: "temperatura" },
      });
       temperatura= parseFloat(configTemperatura?.valor || "0.7");
    }else {
      temperatura = 0.3; 
    }

    

    // Llamar a OpenAI
    const respuestaDelBot = await getChatbotResponse([
      {
        role: "system",
        content:
          `Eres un asistente de viajes útil. Tu función es ayudar al usuario a organizar viajes al mejor precio, en base a sus requerimientos. Tu lenguaje debe ser SIEMPRE educado. Saluda diciendo en tu primer mensaje: ${mensajeBienvenida}`,
      },
      ...chatHistory,
    ], temperatura);

    // Guardar respuesta del bot
    await prisma.mensajes.create({
      data: {
        id_conversacion: conversationId,
        emisor: "assistant",
        mensaje: respuestaDelBot,
      },
    });

    // Actualizar fecha de último mensaje
    await prisma.conversaciones.update({
      where: {
        id_conversacion: conversationId,
      },
      data: {
        fecha_ultimo_mensaje: new Date(),
      },
    });

    // Responder al frontend
    res.json({ respuesta: respuestaDelBot });
  } catch (error) {
    console.error("Error al procesar mensaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  procesarMensaje,
};
