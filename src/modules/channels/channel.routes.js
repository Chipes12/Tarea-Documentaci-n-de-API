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
 *                      type: Array
 *       responses:
 *         200:
 *           description: An object with the data of the created channel
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
 *         - in: path
 *           name: id
 *           required: true
 *           description: the unique channel id
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
 *           description: A String with the invitation link for the next 24 hours
 */
 router.get('/:id/invite', controller.invite);

  /**
 * @swagger
 *   /api/channels/join/{id}:
 *     put:
 *       tags:
 *       - Channels
 *       description: enter a channel by invitation
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: the token of the channel
 *         - in: body
 *           name: user
 *           description: user
 *           schema:
 *              type: object
 *              required:
 *                  - id_User
 *              properties:
 *                  id_User:
 *                      type: String
 *       responses:
 *         200:
 *           description: An object that has the channel with the new member
 */
 router.put('/join/:id', controller.join);
module.exports = router;

