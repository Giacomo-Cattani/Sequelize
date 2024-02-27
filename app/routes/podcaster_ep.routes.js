const express = require('express');
const router = express.Router();
const podcasterEpController = require('../controllers/podcaster_ep.controller');

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

module.exports = router;
