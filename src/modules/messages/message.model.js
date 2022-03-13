const Database = require('../../core/database');
const Model = require('../../core/model');
const { ObjectId } = require('mongodb');

class Message extends Model {
    constructor() {
        super('messages');
    }
    create(body){
        return new Promise((accept, reject) => {
            if(!body.id_User || !body.id_Channel || !body.text) reject();
            Database.collection('users').findOne({_id: ObjectId(body.id_User)}, (err, result) => {
                if(!result) reject();
            });
            Database.collection('channels').findOne({_id: ObjectId(body.id_Channel)}, (err, result) => {
                if(!result)reject();
            });
            let today = new Date();
            let newMessage = {
                id_User: body.id_User,
                id_Channel: body.id_Channel,
                text: body.text,
                date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
            }
            this.collection.insertOne(newMessage);
            accept(newMessage);
        });
    }
}

module.exports = Message;