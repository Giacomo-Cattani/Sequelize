// Import necessary modules
const express = require('express');
const router = express.Router();
const tagsController = require('../controllers/tags.controller');

// Define routes
router.get('/tags', tagsController.getAllTags);
router.get('/tags/:id', tagsController.getTagById);
router.post('/tags', tagsController.createTag);
router.put('/tags/:id', tagsController.updateTagById);
router.delete('/tags/:id', tagsController.deleteTagById);

// Export the router
module.exports = router;
