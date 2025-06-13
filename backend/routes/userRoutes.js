const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Ruta para crear un usuario
router.post('/register', userController.createUser);

// Ruta para iniciar sesión
router.post('/login', userController.login);

module.exports = router;
