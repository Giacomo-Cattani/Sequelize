const db = require("../models");
const Comment = db.comments;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Comment
    const comment = {
        title: req.body.title,
        text: req.body.text,
        tutorialId: req.body.tutorialId,
        published: req.body.published ? req.body.published : false
    };
    // Save Tutorial in the database
    Comment.create(comment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
