import express from "express";
import cors from "cors";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
var corsOptions = {};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
import epTagsRoutes from "./app/routes/ep_tags.routes.js";
import episodesRoutes from "./app/routes/episodes.routes.js";
import podcastRoutes from "./app/routes/podcast.routes.js";
import podcasterEpRoutes from "./app/routes/podcaster_ep.routes.js";
import podcasterRoutes from "./app/routes/podcaster.routes.js";
import reviewRoutes from "./app/routes/review.routes.js";
import tagsRoutes from "./app/routes/tags.routes.js";
import usersEpRoutes from "./app/routes/users_ep.routes.js";
import usersRoutes from "./app/routes/users.routes.js";

epTagsRoutes(app);
episodesRoutes(app);
podcastRoutes(app);
podcasterEpRoutes(app);
podcasterRoutes(app);
reviewRoutes(app);
tagsRoutes(app);
usersEpRoutes(app);
usersRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});