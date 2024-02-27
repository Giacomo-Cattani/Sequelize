// Import necessary modules
import express from 'express';
const router = express.Router();
import reviewController from '../controllers/review.controller.js';


// Export the router
export default app => {

    // Define routes
    router.get('/', reviewController.getAllReviews);
    router.get('/:id', reviewController.getReviewById);
    router.post('/', reviewController.createReview);
    router.put('/:id', reviewController.updateReviewById);
    router.delete('/:id', reviewController.deleteReviewById);

    app.use('/app/reviews', router);
};
