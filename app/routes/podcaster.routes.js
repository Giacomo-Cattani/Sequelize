const express = require('express');
const router = express.Router();
const podcasterController = require('../controllers/podcaster.controller');

// GET /podcasters
router.get('/podcasters', podcasterController.getAllPodcasters);

// GET /podcasters/:id
router.get('/podcasters/:id', podcasterController.getPodcasterById);

// POST /podcasters
router.post('/podcasters', podcasterController.createPodcaster);

// PUT /podcasters/:id
router.put('/podcasters/:id', podcasterController.updatePodcasterById);

// DELETE /podcasters/:id
router.delete('/podcasters/:id', podcasterController.deletePodcasterById);

module.exports = router;
