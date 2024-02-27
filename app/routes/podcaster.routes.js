import express from 'express';
const router = express.Router();
import podcasterController from '../controllers/podcaster.controller.js';


export default app => {

    // GET /podcasters
    router.get('/', podcasterController.getAllPodcasters);

    // GET /podcasters/:id
    router.get('/:id', podcasterController.getPodcasterById);

    // POST /podcasters
    router.post('/', podcasterController.createPodcaster);

    // PUT /podcasters/:id
    router.put('/:id', podcasterController.updatePodcasterById);

    // DELETE /podcasters/:id
    router.delete('/:id', podcasterController.deletePodcasterById);

    app.use('/app/podcasters', router);
};
