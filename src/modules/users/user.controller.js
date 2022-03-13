const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const user = new User();
        user.create(req.body).then(result => {
            if(result) res.send(result);
        }).catch(err => {res.send('El correo ya esta en uso')});
    },
    logIn: (req, res) => {
        const user = new User();
        user.logIn(req.body).then(result => {
            if(result) res.send(result);
        }).catch(err => {res.send('Credenciales incorrectas')});
    }
}

module.exports = UsersController;