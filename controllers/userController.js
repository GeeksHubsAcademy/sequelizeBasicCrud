const {
    User
} = require('../models');


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'prueba4',
    password: '1234'
});

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const UserController = {
    
    showAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar los users'
                })
            })
    },

    showId(req,res) {

        let idUser = req.body.id;

        User.query(`SELECT * from Users WHERE id = ${idUser}`)
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema localizando al usuario'
                })
            })
    },

    async register(req,res) {
        try {
            const db = await conexion;
            const [citas] = await db.execute(`SELECT * FROM citas`);
            //console.log(citas)
            res.send({
                citas
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Ha habido un problema consultando las citas'
            });
        }
    },

    async delete(req, res) {
        try {
            const email = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Email not found'
                })
            }
            res.send({
                message: 'Account successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the account'
            })
        }
    },

    getById(req, res) {
        User.findByPk(req.body.id)
            .then(user => res.send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to find the user'
                })
            })
    },
            
}

module.exports = UserController;