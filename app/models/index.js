import Sequelize from "sequelize";
import podcastModel from "./podcast.model.js";
import podcasterModel from "./podcaster.model.js";
import tagsModel from "./tags.model.js";
import usersModel from "./users.model.js";
import episodesModel from "./episodes.model.js";
import reviewModel from "./review.model.js";
import podcasterEpModel from "./podcaster_ep.model.js";
import usersEpModel from "./users_ep.model.js";
import epTagsModel from "./ep_tags.model.js";

const sequelize = new Sequelize("podcast", "root", "", {
    host: "localhost",
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.podcast = podcastModel(sequelize, Sequelize);
db.podcaster = podcasterModel(sequelize, Sequelize);
db.tags = tagsModel(sequelize, Sequelize);
db.users = usersModel(sequelize, Sequelize);
db.episodes = episodesModel(sequelize, Sequelize);
db.review = reviewModel(sequelize, Sequelize);
db.podcaster_ep = podcasterEpModel(sequelize, Sequelize);
db.users_ep = usersEpModel(sequelize, Sequelize);
db.ep_tags = epTagsModel(sequelize, Sequelize);

// Assuming that the models are defined and assigned to the db object

// Podcast has many Episodes
db.podcast.hasMany(db.episodes, { foreignKey: 'Fk_Podcast', as: 'episodes' });

// Episodes belong to Podcast
db.episodes.belongsTo(db.podcast, { foreignKey: 'Fk_Podcast', as: 'podcast' });

// Podcaster has many Podcaster_Ep through Episodes
db.podcaster.belongsToMany(db.episodes, { through: 'podcaster_ep', foreignKey: 'Fk_Podcaster', otherKey: 'Fk_Episode' });

// Episodes belong to many Podcaster through Podcaster_Ep
db.episodes.belongsToMany(db.podcaster, { through: 'podcaster_ep', foreignKey: 'Fk_Episode', otherKey: 'Fk_Podcaster' });

// Users has many Review
db.users.hasMany(db.review, { foreignKey: 'Fk_User', as: 'reviews' });

// Review belong to Users
db.review.belongsTo(db.users, { foreignKey: 'Fk_User', as: 'user' });

// Episodes has many Review
db.episodes.hasMany(db.review, { foreignKey: 'Fk_Ep', as: 'reviews' });

// Review belong to Episodes
db.review.belongsTo(db.episodes, { foreignKey: 'Fk_Ep', as: 'episode' });

// Users has many Users_Ep through Episodes
db.users.belongsToMany(db.episodes, { through: 'users_ep', foreignKey: 'Fk_User', otherKey: 'Fk_Ep' });

// Episodes belong to many Users through Users_Ep
db.episodes.belongsToMany(db.users, { through: 'users_ep', foreignKey: 'Fk_Ep', otherKey: 'Fk_User' });

// Tags has many Ep_Tags through Episodes
db.tags.belongsToMany(db.episodes, { through: 'ep_tags', foreignKey: 'Fk_Tags', otherKey: 'Fk_Episode' });

// Episodes belong to many Tags through Ep_Tags
db.episodes.belongsToMany(db.tags, { through: 'ep_tags', foreignKey: 'Fk_Episode', otherKey: 'Fk_Tags' });

export default db;
