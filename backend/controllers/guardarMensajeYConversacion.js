const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const guardarMensaje = async (req, res) => {
  try {
    const { id_usuario, mensaje, id_conversacion, titulo } = req.body;
    console.log("📨 Body recibido en /mensaje:", req.body);
    
    const idUsuarioInt = id_usuario ? parseInt(id_usuario) : null;

    // Validación básica
    if (!mensaje || !id_usuario) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    const tituloRaw = req.body.titulo;
const titulo = (typeof tituloRaw === 'string' && tituloRaw.trim() !== '')
  ? tituloRaw.trim()
  : (typeof mensaje === 'string' ? mensaje.substring(0, 50) : null);


    let conversacion;

    if (!id_conversacion) {
      conversacion = await prisma.conversaciones.create({
        data: {
          id_usuario: idUsuarioInt,
          titulo: titulo,
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
        emisor: "usuario",
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
