const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const PORT = 3000;

//Importo el middleware de auth
const auth = require('./middlewares/auth');

app.use(express.json()); //para evitar que el req.body sea undefined

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

//Enrutado a endpoints de user
app.use('/users', usersRouter);

//Enrutado a endpoints de citas
// app.use('/citas', ordersRouter);

//Enrutado a endpoints de pedidos
//Endpoint de pedidos
app.use('/orders', auth, ordersRouter);

app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));