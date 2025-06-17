const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const guardarMensaje = async (req, res) => {
  try {
    // LOG para depuración (antes de cualquier return)
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

    // Permitir crear conversación solo con título (sin mensaje)
    if (!mensaje && titulo && id_usuario) {
      const conversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: idUsuarioInt,
          titulo: titulo.substring(0, 50),
          estado: "en curso",
        },
      });
      return res.json({
        id_conversacion: conversacion.id_conversacion,
        titulo: conversacion.titulo,
      });
    }

    // Validación básica para guardar mensaje
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
      });

      if (!conversacion) {
        return res.status(404).json({ error: "Conversación no encontrada" });
      }
    }

    const mensajeUsuario = await prisma.mensajes.create({
      data: {
        id_conversacion: conversacion.id_conversacion,
        emisor: emisor || "usuario", 
        mensaje,
      },
    });

    await prisma.conversaciones.update({
      where: { id_conversacion: conversacion.id_conversacion },
      data: { fecha_ultimo_mensaje: new Date() },
    });

    res.json({
      id_conversacion: conversacion.id_conversacion,
      titulo: conversacion.titulo,
      mensajeUsuario,
    });
  } catch (error) {
    console.error("Error al guardar mensaje:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = { guardarMensaje };
