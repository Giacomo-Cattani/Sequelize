const express = require('express');
const router = express.Router();
const episodesController = require('../controllers/episodes.controller');

// GET /episodes
router.get('/episodes', episodesController.getAllEpisodes);

// GET /episodes/:id
router.get('/episodes/:id', episodesController.getEpisodeById);

// POST /episodes
router.post('/episodes', episodesController.createEpisode);

// PUT /episodes/:id
router.put('/episodes/:id', episodesController.updateEpisode);

// DELETE /episodes/:id
router.delete('/episodes/:id', episodesController.deleteEpisode);

module.exports = router;
