const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/messages:
 *     post:
 *       tags:
 *       - Messages
 *       description: Create a message on a channel
 *       parameters:
 *         - in: body
 *           name: message
 *           description: a message from who, where, what? and when?
 *           schema:
 *              type: object
 *              required:
 *                  - id_User
 *                  - id_Channel
 *                  - text
 *                  - date
 *              properties:
 *                  id_User:
 *                      type: String
 *                  id_Channel:
 *                      type: String
 *                  text:
 *                      type: String
 *                  date:
 *                      type: String
 *       responses:
 *         201:
 *           description: An object with the created message
 */
    router.post('/', controller.create);
 
 module.exports = router;
