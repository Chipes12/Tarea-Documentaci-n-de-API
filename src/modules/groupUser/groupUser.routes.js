const router = require('express').Router();
const controller = require('./groupUser.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idGUser')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;

