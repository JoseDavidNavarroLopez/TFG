const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const guardarMensaje = async (req, res) => {
  try {
    console.log("BODY recibido en guardarMensaje:", req.body);

    const { id_usuario, mensaje, id_conversacion, titulo, emisor } = req.body;
    console.log(
      "id_usuario:",
      id_usuario,
      "mensaje:",
      mensaje,
      "id_conversacion:",
      id_conversacion,
      "titulo:",
      titulo
    );

    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;

    // Crear conversación si no hay id_conversacion
    let conversacion;
    if (!id_conversacion) {
      conversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: idUsuarioInt,
          titulo: titulo ? titulo.substring(0, 50) : "Sin título",
          estado: "en curso",
        },
      });
    } else {
      conversacion = await prisma.conversaciones.findUnique({
        where: { id_conversacion: parseInt(id_conversacion) },
      });
    }

    // Validación básica para guardar mensaje
    if (!mensaje || !id_usuario) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    if (!conversacion) {
      return res.status(404).json({ error: "Conversación no encontrada" });
    }

    // Guardar mensaje
    const mensajeUsuario = await prisma.mensajes.create({
      data: {
        id_conversacion: conversacion.id_conversacion,
        emisor: emisor || "usuario",
        mensaje,
      },
    });

    // Actualizar fecha último mensaje
    await prisma.conversaciones.update({
      where: { id_conversacion: conversacion.id_conversacion },
      data: { fecha_ultimo_mensaje: new Date() },
    });

    // Responder con datos de conversación y mensaje
    return res.json({
      id_conversacion: conversacion.id_conversacion,
      titulo: conversacion.titulo,
      mensajeUsuario,
    });
  } catch (error) {
    console.error("Error al guardar mensaje:", error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = { guardarMensaje };
