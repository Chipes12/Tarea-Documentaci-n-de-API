const Model = require('../../core/model');
const jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_KEY;

class User extends Model {
    constructor() {
        super('users');
    }
    create(body){
        return new Promise ((accept, reject) => {
            this.collection.findOne({email : body.email}, (err, result) => {
                if(!result){
                    let newUser = {
                        "name": body.name,
                        "username": body.username,
                        "email": body.email,
                        "password" : body.password,
                        "role": 'mortal'
                    }
                    this.collection.insertOne(newUser);
                    accept(JSON.stringify({status: "Creado con exito"}));
                }
                reject('Correo ya en uso');
            });
        });
    }
    logIn(body){
        return new Promise((accept, reject) => {
            this.collection.findOne({email: body.email}, (err, result) => {
                if(result && result.password == body.password){
                    let payload = {
                        _id: result._id,
                        role: result.role
                    };
                    let options = {
                        expiresIn: 60 * 60
                    }
                    accept(JSON.stringify({token : jwt.sign(payload, tokenKey, options)}));
                }
                else reject('Datos incorrectos');
            });
        });
    }
}

module.exports = User;