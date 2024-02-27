import express from 'express';
const router = express.Router();
import podcasterEpController from '../controllers/podcaster_ep.controller.js';



export default app => {
    // GET /podcaster_ep
    router.get('/', podcasterEpController.getAllPodcasterEp);

    // GET /podcaster_ep/:id
    router.get('/:id', podcasterEpController.getPodcasterEpById);

    // POST /podcaster_ep
    router.post('/', podcasterEpController.createPodcasterEp);

    // PUT /podcaster_ep/:id
    router.put('/:id', podcasterEpController.updatePodcasterEpById);

    // DELETE /podcaster_ep/:id
    router.delete('/:id', podcasterEpController.deletePodcasterEpById);

    app.use('/app/podcaster_ep', router);
};
