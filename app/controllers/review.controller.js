const { Review, User, Episode } = require('../models');

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { stars, comment, fkUser, fkEpisode } = req.body;

    const review = await Review.create({
      stars,
      comment,
      fkUser,
      fkEpisode,
    });

    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Episode, as: 'episode' },
      ],
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id, {
      include: [
        { model: User, as: 'user' },
        { model: Episode, as: 'episode' },
      ],
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a review by ID
exports.updateReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const { stars, comment } = req.body;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.stars = stars;
    review.comment = comment;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a review by ID
exports.deleteReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    await review.destroy();

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
