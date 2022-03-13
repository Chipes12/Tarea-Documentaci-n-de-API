const GroupController = {
    getAll: (req, res) => {
        res.send('will get groups');
    },
    getId: (req, res) => {
        res.send(`Grupo  ${req.idGroup}`);
    },
    create: (req, res) => {
        res.send('Grupo creado');
    },
    update: (req, res) => {
        res.send(`Grupo ${req.idGroup}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Grupo ${req.idGroup} Eliminado`);
    }
}

module.exports = GroupController;