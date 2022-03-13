const Channel = require("./channel.model");

const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const channel = new Channel();
        channel.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {res.send('Error while creating channel')});
    },
    invite: (req, res) => {
        const channel = new Channel();
        channel.invite(req).then(result => {
            if(result) res.send(result);
        }).catch(err => {res.send('unable to create invitation link')});
    },
    join: (req, res) => {
        const channel = new Channel();
        channel.join(req).then(result => {
            if(result) res.send(result);
        }).catch(err => {res.send(`can't join the channel`)});
    }
}

module.exports = ChannelsController;