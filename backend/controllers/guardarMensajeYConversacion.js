const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const guardarMensaje = async (req, res) => {
  try {
    console.log("BODY recibido en guardarMensaje:", req.body);

    const { id_usuario, mensaje, id_conversacion, titulo, emisor } = req.body;
    console.log(
      "id_usuario:", id_usuario,
      "mensaje:", mensaje,
      "id_conversacion:", id_conversacion,
      "titulo:", titulo
    );

    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;
    if (!idUsuarioInt) {
      return res.status(400).json({ error: "id_usuario es obligatorio y debe ser numérico" });
    }

    let conversacion;

    // Crear conversación solo si llega titulo y NO id_conversacion
    if (titulo && !id_conversacion) {
      conversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: idUsuarioInt,
          titulo: titulo.substring(0, 50),
          estado: "en curso",
        },
      });
      // Si solo se manda título sin mensaje, respondemos aquí y terminamos
      if (!mensaje) {
        return res.json({
          id_conversacion: conversacion.id_conversacion,
          titulo: conversacion.titulo,
        });
      }
    } else if (id_conversacion) {
      // Si llega id_conversacion, buscarla
      conversacion = await prisma.conversaciones.findUnique({
        where: { id_conversacion: parseInt(id_conversacion) },
      });
      if (!conversacion) {
        return res.status(404).json({ error: "Conversación no encontrada" });
      }
    } else {
      // No llega título ni id_conversacion: no se puede crear conversación ni guardar mensaje
      return res.status(400).json({ error: "Se requiere id_conversacion o título para crear una conversación" });
    }

    // Validación para guardar mensaje (si llega mensaje)
    if (!mensaje) {
      return res.status(400).json({ error: "El mensaje es obligatorio para guardar" });
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
