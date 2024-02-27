import express from 'express';
const router = express.Router();
import podcastController from '../controllers/podcast.controller.js';



export default app => {
    // GET all podcasts
    router.get('/', podcastController.getAllPodcasts);

    // GET a specific podcast by ID
    router.get('/:id', podcastController.getPodcastById);

    // POST a new podcast
    router.post('/', podcastController.createPodcast);

    // PUT (update) a specific podcast by ID
    router.put('/:id', podcastController.updatePodcast);

    // DELETE a specific podcast by ID
    router.delete('/:id', podcastController.deletePodcast);

    app.use('/app/podcasts', router);
}
