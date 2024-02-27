module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", comments.create);
    app.use('/api/comments', router);
};