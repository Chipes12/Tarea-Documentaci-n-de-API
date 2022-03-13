const RoleController = {
    getAll: (req, res) => {
        res.send('will get roles');
    },
    getId: (req, res) => {
        res.send(`Rol ${req.idRol}`);
    },
    create: (req, res) => {
        res.send('Rol creado');
    },
    update: (req, res) => {
        res.send(`Rol ${req.idRol}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Rol ${req.idRol} Eliminado`);
    }
}

module.exports = RoleController;