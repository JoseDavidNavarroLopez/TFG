const prisma = require("../prisma.js");
const { getChatbotResponse } = require("../services/openai");
const { detectIntentFromMessage } = require("../services/intent.js"); 

const fetch = require("node-fetch");

const API_KEY = "sk-d9818b65ca4b485e9d8355d8cad3a7bc";

const chatConIA = async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: 'Mensaje vacío' });
  }

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Eres una asistente llamada AteneAI, amigable y útil." },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return res.json({ reply: data.choices[0].message.content });
    } else {
      return res.json({ reply: "Lo siento, no tengo respuesta." });
    }
  } catch (error) {
    console.error("Error al comunicarse con DeepSeek:", error);
    return res.status(500).json({ error: 'Error en el servidor de IA' });
  }
};

module.exports = { chatConIA };


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

    let modoMatematico = req.body.modoMatematico ?? false;
    let temperatura;
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




async function obtenerHistorialChats(req, res) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email requerido" });
  }

  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const chats = await prisma.conversaciones.findMany({
      where: { id_usuario: usuario.id_usuario },
      orderBy: { fecha_inicio: "desc" },
      select: {
        id_conversacion: true,
        fecha_inicio: true,
        estado: true,
        titulo: true,
      },
    });

    // Forzar título por defecto si está vacío/nulo
    const chatsConTitulo = chats.map(chat => ({
      ...chat,
      titulo: (chat.titulo && chat.titulo.trim()) ? chat.titulo : "Conversación sin título"
    }));

    res.json(chatsConTitulo);
  } catch (err) {
    console.error("Error obteniendo historial:", err);
    res.status(500).json({ error: "Error al obtener historial de chats" });
  }
}
async function obtenerChatPorId(req, res) {
  const { id } = req.params;

  try {
    const mensajes = await prisma.mensajes.findMany({
      where: { id_conversacion: parseInt(id) },
      orderBy: { fecha: 'asc' },
      select: {
        mensaje: true,
        emisor: true,
      },
    });

    if (!mensajes || mensajes.length === 0) {
      return res.status(404).json({ error: "Chat no encontrado o sin mensajes" });
    }

    res.json({ messages: mensajes });
  } catch (error) {
    console.error("Error obteniendo chat por ID:", error);
    res.status(500).json({ error: "Error al obtener chat" });
  }
}

async function guardarNuevaConversacion(userId) {
  try {
    const nuevaConversacion = await prisma.conversaciones.create({
      data: {
        id_usuario: userId,
        estado: "en curso",
      },
    });

    // Opcional: guardar log de actividad
    await prisma.logs_actividad.create({
      data: {
        id_usuario: userId,
        accion: "Creó nueva conversación manualmente",
      },
    });

    return { exito: true, id_conversacion: nuevaConversacion.id_conversacion };
  } catch (error) {
    console.error("Error al guardar nueva conversación:", error);
    return { exito: false, error: "No se pudo guardar la conversación" };
  }
}



module.exports = {
  procesarMensaje,
  obtenerHistorialChats,
  obtenerChatPorId,
  guardarNuevaConversacion,
  chatConIA,
};
