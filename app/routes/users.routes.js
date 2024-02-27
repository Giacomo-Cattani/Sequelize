import express from 'express';
const router = express.Router();
import usersController from '../controllers/users.controller.js';



export default app => {
    // GET /users
    router.get('/', usersController.getUsers);

    // GET /users/:id
    router.get('/:id', usersController.getUserById);

    // POST /users
    router.post('/', usersController.createUser);

    // PUT /users/:id
    router.put('/:id', usersController.updateUser);

    // DELETE /users/:id
    router.delete('/:id', usersController.deleteUser);

    app.use('/app/users', router);
};
