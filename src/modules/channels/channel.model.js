const Database = require('../../core/database');
const Model = require('../../core/model');
const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_KEY;
const port = process.env.PORT;

class Channel extends Model {
    constructor() {
        super('channels');
    }
    create(body){
        return new Promise ((accept, reject) => {
            if(!body.title || !body.owner || !body.members) reject();
            for(let member in body.members){
                Database.collection('users').findOne({_id: ObjectId(body.members[member])}, (err, result) => {
                    if(!result) reject();
                });
            }
            Database.collection('users').findOne({_id: ObjectId(body.owner)}, (err, result) => {
                if(!result){
                    reject();
                }else{
                    let newChannel = {
                        "title": body.title,
                        "owner": body.owner,
                        "members": body.members
                    }
                    this.collection.insertOne(newChannel);
                    accept(newChannel);
                }
            });
        });
    }
    invite(req){
        return new Promise((accept, reject) => {
            if(!req.body.id_User) reject();
            Database.collection('users').findOne({_id: ObjectId(req.body.id_User)}, (err, result) => {
                if(!result) reject();
            });
            this.collection.findOne({_id: ObjectId(req.params.id)}, (err, result) => {
                if(!result) reject();
                else {
                    if(result.owner != req.body.id_User) reject();
                    else {
                        let payload = {id_Channel: req.params.id}
                        let options = {expiresIn: '24h'}
                        accept(`http://localhost:${port}/api/channels/join/${ jwt.sign(payload, tokenKey, options)}`);
                    }
                }
            });
        });
    }
    join(req){
        return new Promise((accept, reject) => {
            let isInChannel = flase;
            if(!req.body.id_User) reject();
            Database.collection('users').findOne({_id: ObjectId(req.body.id_User)}, (err, result) => {
                if(!result){
                    reject();
                }
            });
            jwt.verify(req.params.id, tokenKey, (err, decoded) =>{
                if(err) reject();
                this.collection.findOne({_id: ObjectId(decoded.id_Channel)}, (err, result) => {
                    if(!result) reject();
                    for(let member in result.members){
                        if(result.members[member] == req.body.id_User){
                            isInChannel = true;
                            reject();
                        }
                    }
                    if(!isInChannel){
                        this.collection.updateOne({_id: ObjectId(decoded.id_Channel)}, {$push: {members: req.body.id_User}}, (err, noerr) => {
                            accept(this.collection.findOne({_id: ObjectId(decoded.id_Channel)}));
                        });
                    }
                });
            });
        });
    }
}

module.exports = Channel;