const {
    Order, User, Product
} = require('../models');


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'prueba4',
    password: '1234'
});

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const OrderController = {
    
    async getAll(req, res) {
        try{
            const orders = await Order.findAll({
                attributes: {
                    exclude: ['UserId']
                },
                include: [{
                    model: Product,
                    attributes: ['nombre','precio','descripcion','stock'],
                    through: {
                        attributes: []
                    }
                }, {
                    model: User,
                    attributes: ['name', 'state','birth','card']
                }]
            });
            res.send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the orders'
            })
        }
    }, 
    async create (req, res) {
        try {
            const returnDate = new Date();
            //returnDate.setDate(returnDate.getDate() + 2)
            const order = await Order.create({
                UserId: req.body.UserId,
                fecha: returnDate,
                tracking: "321654987p",
                estado: "en tramite",
                total: 50
            });
                const order = await order.addOrder(req.body.products)
                
                res.send({
                    message: 'Order successfully completed'
                })
            
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem+ trying to create the order'
            })
        }
    }          
}

module.exports = OrderController;