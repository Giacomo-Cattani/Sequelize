const express = require('express');
const router = express.Router();
const epTagsController = require('../controllers/ep_tags.controller');

// GET all ep_tags
router.get('/ep_tags', epTagsController.getAll);

// GET a single ep_tag by ID
router.get('/ep_tags/:id', epTagsController.getById);

// CREATE a new ep_tag
router.post('/ep_tags', epTagsController.create);

// UPDATE an existing ep_tag
router.put('/ep_tags/:id', epTagsController.update);

// DELETE an ep_tag
router.delete('/ep_tags/:id', epTagsController.delete);

module.exports = router;
