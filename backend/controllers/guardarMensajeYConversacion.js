const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const responderAsistente = (mensaje) => {
  return `Has accedido al chat : "${mensaje}"`;
};

const guardarMensaje = async (req, res) => {
  try {
    const { id_usuario, mensaje, id_conversacion } = req.body;
    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;

    // Validación básica
    if (!mensaje || !id_usuario) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    let conversacion;

    if (!id_conversacion) {
      conversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: idUsuarioInt,
          titulo: mensaje.substring(0, 50),
          estado: "en curso",
        },
      });
    } else {
      conversacion = await prisma.conversaciones.findUnique({
        where: { id_conversacion },
        select: {
          id_conversacion: true,
          titulo: true,
          // si necesitas otros campos aquí, agrégalos
        },
      });

      if (!conversacion) {
        return res.status(404).json({ error: "Conversación no encontrada" });
      }
    }

    const mensajeUsuario = await prisma.mensajes.create({
      data: {
        id_conversacion: conversacion.id_conversacion,
        emisor: "usuario",
        mensaje,
      },
    });

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

module.exports = { guardarMensaje };
