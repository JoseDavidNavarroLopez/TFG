const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Crear conversación nueva
const crearConversacion = async (req, res) => {
  try {
    const { id_usuario, titulo } = req.body;
    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;

    if (!titulo || !id_usuario) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const conversacion = await prisma.conversaciones.create({
      data: {
        id_usuario: idUsuarioInt,
        titulo,
        estado: "en curso",
      },
    });

    res.json({
      id_conversacion: conversacion.id_conversacion,
      titulo: conversacion.titulo,
    });
  } catch (error) {
    console.error("Error al crear conversación:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// Guardar mensaje en conversación existente
const guardarMensaje = async (req, res) => {
  try {
    const { id_usuario, mensaje, id_conversacion } = req.body;
    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;

    if (!mensaje || !id_usuario || !id_conversacion) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Verificar que exista la conversación
    const conversacion = await prisma.conversaciones.findUnique({
      where: { id_conversacion },
      select: {
        id_conversacion: true,
        titulo: true,
      },
    });

    if (!conversacion) {
      return res.status(404).json({ error: "Conversación no encontrada" });
    }

    const mensajeUsuario = await prisma.mensajes.create({
      data: {
        id_conversacion: conversacion.id_conversacion,
        emisor: "usuario",
        mensaje,
      },
    });

    // Suponiendo que responderAsistente es síncrona o await
    const respuesta = responderAsistente(mensaje);

    const mensajeAsistente = await prisma.mensajes.create({
      data: {
        id_conversacion: conversacion.id_conversacion,
        emisor: "asistente",
        mensaje: respuesta,
      },
    });

    await prisma.conversaciones.update({
      where: { id_conversacion: conversacion.id_conversacion },
      data: { fecha_ultimo_mensaje: new Date() },
    });

    res.json({
      id_conversacion: conversacion.id_conversacion,
      titulo: conversacion.titulo,
      mensajes: [mensajeUsuario, mensajeAsistente],
    });
  } catch (error) {
    console.error("Error al guardar mensaje:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = { crearConversacion, guardarMensaje };
