const router = require('express').Router();
const OrderController = require('../controllers/orderController');

//Ruta para mostrar los usuarios
router.post('/create', OrderController.create);

//Ruta para crear obtener todos los pedidos
router.get('/getAll', OrderController.getAll);

module.exports = router;