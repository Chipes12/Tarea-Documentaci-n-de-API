const SessionController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    getId: (req, res) => {
        res.send(`Session ${req.idSession}`);
    },
    create: (req, res) => {
        res.send('Sesión creada');
    },
    update: (req, res) => {
        res.send(`Sesión ${req.idSession}  Actualizada`);
    },
    delete: (req, res) => {
        res.send(`Sesión ${req.idSession} Eliminada`);
    }
}

module.exports = SessionController;