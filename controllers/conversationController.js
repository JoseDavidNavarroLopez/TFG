const prisma = require('../prisma');

exports.getConversacionesPorUsuario = async (req, res) => {
  try {
    const { userId } = req.params;

    const conversaciones = await prisma.conversaciones.findMany({
      where: {
        id_usuario: parseInt(userId),
      },
      orderBy: {
        fecha_ultimo_mensaje: 'desc',
      },
      include: {
        mensajes: true,
      },
    });

    res.json(conversaciones);
  } catch (error) {
    console.error('Error al obtener conversaciones:', error);
    res.status(500).json({ error: 'No se pudieron obtener las conversaciones' });
  }
};
