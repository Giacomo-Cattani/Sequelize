const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
var corsOptions = {};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

require("./app/routes/tutorial.routes")(app);
require("./app/routes/comment.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});