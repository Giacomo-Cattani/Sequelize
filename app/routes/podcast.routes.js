const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcast.controller');

// GET all podcasts
router.get('/podcasts', podcastController.getAllPodcasts);

// GET a specific podcast by ID
router.get('/podcasts/:id', podcastController.getPodcastById);

// POST a new podcast
router.post('/podcasts', podcastController.createPodcast);

// PUT (update) a specific podcast by ID
router.put('/podcasts/:id', podcastController.updatePodcast);

// DELETE a specific podcast by ID
router.delete('/podcasts/:id', podcastController.deletePodcast);

module.exports = router;
