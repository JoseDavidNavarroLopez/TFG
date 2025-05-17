// Lógica del controlador de usuarios

exports.getAllUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' }
  ]);
};

// controllers/userController.js
const prisma = require('../prisma');

exports.getAllUsers = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany(); // nombre exacto según tabla en DB
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
//añadir users
exports.createUser = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        nombre,
        email,
      },
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
};