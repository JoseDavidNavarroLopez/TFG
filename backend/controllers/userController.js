

exports.getAllUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' }
  ]);
};

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
    const { name, email, password } = req.body;

    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        nombre: name,
        email,
        password: password,
      },
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
};

//Login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    res.json({
      email: usuario.email,
      name: usuario.nombre,
      id: usuario.id_usuario, // opcional si lo necesitas en el frontend
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error en el login' });
  }
};








//------------------pa flipar------------------

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// PUT /usuarios/update
router.put('/update', async (req, res) => {
  const { id_usuario, nombre, password } = req.body;

  if (!id_usuario) {
    return res.status(400).json({ error: 'El ID del usuario es obligatorio.' });
  }

  try {
    // Verificar si el usuario existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id_usuario },
    });

    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    // Preparar los datos a actualizar
    const datosActualizados = {};
    if (nombre) datosActualizados.nombre = nombre;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      datosActualizados.password = hashedPassword;
    }

    if (Object.keys(datosActualizados).length === 0) {
      return res.status(400).json({ error: 'No se proporcionaron datos para actualizar.' });
    }

    // Actualizar el usuario
    await prisma.usuario.update({
      where: { id_usuario },
      data: datosActualizados,
    });

    res.json({ success: true, message: 'Usuario actualizado correctamente.' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

module.exports = router;

