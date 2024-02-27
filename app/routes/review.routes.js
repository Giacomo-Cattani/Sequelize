// Import necessary modules
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

// Define routes
router.get('/reviews', reviewController.getAllReviews);
router.get('/reviews/:id', reviewController.getReviewById);
router.post('/reviews', reviewController.createReview);
router.put('/reviews/:id', reviewController.updateReviewById);
router.delete('/reviews/:id', reviewController.deleteReviewById);

// Export the router
module.exports = router;
