const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Middleware para proteger rutas
const { protect, restrictTo, restrictToSelf } = require('../middlewares/auth.middleware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.register);

// Ruta para el inicio de sesión
router.post('/login', userController.login);

// Ruta para actualizar el perfil de usuario
router.patch('/update/:id', protect, restrictToSelf, userController.updateProfile);

// Ruta para obtener todos los usuarios (solo admin)
router.get('/all', protect, restrictTo('admin'), userController.getAllUsers);

module.exports = router;
