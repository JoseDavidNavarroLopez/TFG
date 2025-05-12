const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
  res.json({ message: 'Aquí están todos los usuarios' });
});

// Ruta para crear un usuario
router.post('/', userController.createUser);

module.exports = router;
