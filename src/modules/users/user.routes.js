const router = require('express').Router();
const controller = require('./user.controller');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get('/:id', controller.getOne);

/**
 * @swagger
 *   /api/users:
 *     post:
 *       tags:
 *       - Users
 *       description: Register one user
 *       parameters:
 *         - in: body
 *           name: user
 *           description: The user to create
 *           schema:
 *              type: object
 *              required:
 *                  - name
 *                  - email
 *                  - password
 *              properties:
 *                  name: 
 *                      type: String
 *                  email:
 *                      type: String
 *                  password:
 *                      type: String
 *       responses:
 *         201:
 *           description: An object with the created user
 */
router.post('/', controller.create);

/**
 * @swagger
 *   /api/users/login:
 *     post:
 *       tags:
 *       - Users
 *       description: Login as one user
 *       parameters:
 *         - in: body
 *           name: user
 *           description: The user to identify
 *           schema:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: String
 *                  password:
 *                      type: String
 *       responses:
 *         200:
 *           description: A String with the token of the session
 */
router.post('/login', controller.logIn);

module.exports = router;

