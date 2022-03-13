const router = require('express').Router();
const controller = require('./role.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idRole')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;