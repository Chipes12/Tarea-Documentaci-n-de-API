const router = require('express').Router();
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
  *       description: Get one channel by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The channels's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);

 /**
 * @swagger
 *   /api/channels:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create a channel
 *       parameters:
 *         - in: body
 *           name: channel
 *           description: Description of what it's on the channel
 *           schema:
 *              type: object
 *              required:
 *                  - title
 *                  - owner
 *                  - members
 *                  - messages
 *              properties:
 *                  title:
 *                      type: String
 *                  owner:
 *                      type: String
 *                  members:
 *                      type: [User]
 *                  messages:
 *                      type: [Message]
 *       responses:
 *         200:
 *           description: logIn as a User
 */
 router.post('/', controller.create);

 /**
 * @swagger
 *   /api/channels/{id}/invite:
 *     get:
 *       tags:
 *       - Channels
 *       description: Create an invitation link to a channel
 *       parameters:
 *         - in: body
 *           name: owner
 *           description: Only the owner of the channel can create an invitation link
 *           schema:
 *              type: object
 *              required:
 *                  - id_User
 *              properties:
 *                  id_User:
 *                      type: String
 *       responses:
 *         200:
 *           description: the invitation link for the next 24 hours
 */
 router.get('/:id/invite', controller.invite);

 router.post('/join/:id', controller.join);
module.exports = router;

