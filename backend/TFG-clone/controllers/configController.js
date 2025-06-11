const prisma = require("../prisma.js");

async function obtenerConfiguraciones(req, res) {
  try {
    const configuraciones = await prisma.configuraciones.findMany();
    res.json(configuraciones);
  } catch (error) {
    console.error("Error al obtener configuraciones:", error);
    res.status(500).json({ error: "Error al obtener configuraciones" });
  }
}

async function crearOActualizarConfiguracion(req, res) {
  const { clave, valor } = req.body;

  try {
    const configuracion = await prisma.configuraciones.upsert({
      where: { clave },
      update: { valor },
      create: { clave, valor },
    });

    res.status(200).json(configuracion);
  } catch (error) {
    console.error("Error al guardar configuración:", error);
    res.status(500).json({ error: "Error al guardar configuración" });
  }
}

async function eliminarConfiguracion(req, res) {
  const id = parseInt(req.params.id);

  try {
    const deleted = await prisma.configuraciones.delete({
      where: { id_config: id },
    });
    res.json({ mensaje: "Configuración eliminada", deleted });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar configuración" });
  }
}

module.exports = {
    eliminarConfiguracion,
    obtenerConfiguraciones,
    crearOActualizarConfiguracion,
};
