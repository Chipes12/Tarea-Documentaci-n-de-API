const router = require('express').Router();
const controller = require('./group.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idGroup')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;

