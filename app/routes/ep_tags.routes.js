import express from 'express';
import epTagsController from '../controllers/ep_tags.controller.js';

const router = express.Router();

export default app => {

    // Create a new ep_tag
    router.post("/", epTagsController.create);

    // Retrieve all ep_tags
    router.get("/", epTagsController.getAll);

    // Retrieve a single ep_tag with id
    router.get("/:id", epTagsController.getById);

    // Update a ep_tag with id
    router.put("/:id", epTagsController.update);

    // Delete a ep_tag with id
    router.delete("/:id", epTagsController.deleteEpTag);

    app.use('/app/ep_tags', router);
}
