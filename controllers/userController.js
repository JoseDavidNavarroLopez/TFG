// Lógica del controlador de usuarios

exports.getAllUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' }
  ]);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  // Aquí iría la lógica de guardado
  res.status(201).json({ message: 'Usuario creado', user: newUser });
};
