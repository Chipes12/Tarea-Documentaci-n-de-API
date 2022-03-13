const router = require('express').Router();
const controller = require('./session.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idSession')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;