const groupUserController = {
    getAll: (req, res) => {
        res.send('will get users in the group');
    },
    getId: (req, res) => {
        res.send(`Usuario del grupo  ${req.idGUser}`);
    },
    create: (req, res) => {
        res.send('Usuario agregado al grupo');
    },
    update: (req, res) => {
        res.send(`Usuario del grupo ${req.idGUser}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Usuario ${req.idGUser} Eliminado del grupo`);
    }
}

module.exports = groupUserController;