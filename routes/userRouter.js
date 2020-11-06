const router = require('express').Router();
const UserController = require('../controllers/userController');

//Ruta para mostrar los usuarios
router.get('/showAll', UserController.showAll);

//Ruta para crear un registro nuevo de usuario
router.post('/register', UserController.register);

module.exports = router;