const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Middleware para proteger rutas
const { protect, restrictTo } = require('../middlewares/auth.middlware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.register);

// Ruta para el inicio de sesión
router.post('/login', userController.login);

// Ruta para actualizar el perfil de usuario
router.patch('/update/:userId', protect, userController.updateProfile);

module.exports = router;