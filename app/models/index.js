const Sequelize = require("sequelize");

const sequelize = new Sequelize("podcast", "root", "", {
    host: "localhost",
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.podcast = require("./podcast.model.js")(sequelize, Sequelize);
db.podcaster = require("./podcaster.model.js")(sequelize, Sequelize);
db.tags = require("./tags.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.episodes = require("./episodes.model.js")(sequelize, Sequelize);
db.review = require("./review.model.js")(sequelize, Sequelize);
db.podcaster_ep = require("./podcaster_ep.model.js")(sequelize, Sequelize);
db.users_ep = require("./users_ep.model.js")(sequelize, Sequelize);
db.ep_tags = require("./ep_tags.model.js")(sequelize, Sequelize);

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


module.exports = db;