import express from 'express';
const router = express.Router();
import episodesController from '../controllers/episodes.controller.js';

// // GET /episodes
// router.get('/episodes', episodesController.getAllEpisodes);

// // GET /episodes/:id
// router.get('/episodes/:id', episodesController.getEpisodeById);

// // POST /episodes
// router.post('/episodes', episodesController.createEpisode);

// // PUT /episodes/:id
// router.put('/episodes/:id', episodesController.updateEpisode);

// // DELETE /episodes/:id
// router.delete('/episodes/:id', episodesController.deleteEpisode);

// export default router;


export default app => {
    // Create a new episode
    router.post("/", episodesController.createEpisode);

    // Retrieve all episodes
    router.get("/", episodesController.getAllEpisodes);

    // Retrieve a single episode with id
    router.get("/:id", episodesController.getEpisodeById);

    // Update a episode with id
    router.put("/:id", episodesController.updateEpisode);

    // Delete all episodes
    router.delete("/", episodesController.deleteEpisode);

    app.use('/app/episodes', router);
}