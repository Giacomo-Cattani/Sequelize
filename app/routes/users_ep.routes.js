const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_ep.controller');

// GET /users
router.get('/users', usersController.getAllUserEps);

// GET /users/:id
router.get('/users/:id', usersController.getUserEpById);

// POST /users
router.post('/users', usersController.createUserEp);

// PUT /users/:id
router.put('/users/:id', usersController.updateUserEpById);

// DELETE /users/:id
router.delete('/users/:id', usersController.deleteUserEpById);

module.exports = router;
