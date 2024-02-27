// Import necessary modules
import express from 'express';
const router = express.Router();
import tagsController from '../controllers/tags.controller.js';


// Export the router
export default app => {

    // Define routes
    router.get('/', tagsController.getAllTags);
    router.get('/:id', tagsController.getTagById);
    router.post('/', tagsController.createTag);
    router.put('/:id', tagsController.updateTagById);
    router.delete('/:id', tagsController.deleteTagById);

    app.use('/app/tags', router);
};
