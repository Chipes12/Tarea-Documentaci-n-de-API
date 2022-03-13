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
                        "email": body.email,
                        "password" : body.password,
                        "role": 'mortal'
                    }
                    this.collection.insertOne(newUser);
                    accept(newUser);
                }
                reject();
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
                    accept(jwt.sign(payload, tokenKey, options));
                }
                reject();
            });
        });
    }
}

module.exports = User;