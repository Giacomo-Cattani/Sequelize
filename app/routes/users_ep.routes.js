import express from 'express';
const router = express.Router();
import usersController from '../controllers/users_ep.controller.js';


export default app => {

    // GET /users
    router.get('/', usersController.getAllUserEps);

    // GET /users/:id
    router.get('/:id', usersController.getUserEpById);

    // POST /users
    router.post('/', usersController.createUserEp);

    // PUT /users/:id
    router.put('/:id', usersController.updateUserEpById);

    // DELETE /users/:id
    router.delete('/:id', usersController.deleteUserEpById);

    app.use('/app/users_ep', router);
};
