

exports.getAllUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' }
  ]);
};

const prisma = require('../prisma');

const getAllUsers = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany(); // nombre exacto según tabla en DB
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
//añadir users
const createUser = async (req, res) => {
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
const login = async (req, res) => {
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

//----------------ajustes----------------------

  const updateUsuarios = async (req, res) => {
  const { id, name, password } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'El ID es obligatorio.' });
  }

  try {
    // Verificar si el usuario existe
    const existingUser = await prisma.usuarios.findUnique({ where: { id } });

    if (!existingUser) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    // Preparar los datos a actualizar
    const dataToUpdate = {};
    if (name) dataToUpdate.name = name;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      dataToUpdate.password = hashedPassword;
    }

    // Si no hay nada que actualizar
    if (Object.keys(dataToUpdate).length === 0) {
      return res.status(400).json({ error: 'No se proporcionaron datos para actualizar.' });
    }

    // Actualizar usuario
    await prisma.usuario.update({
      where: { id },
      data: dataToUpdate,
    });

    res.json({ success: true, message: 'Usuario actualizado correctamente.' });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error del servidor.' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  login,
  updateUsuarios,
};







