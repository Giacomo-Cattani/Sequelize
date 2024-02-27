module.exports = (sequelize, Sequelize) => {
    const Ep_tags = sequelize.define("ep_tags", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fk_Tags: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Fk_Episode: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'ep_tags',
        timestamps: false
    });

    Ep_tags.associate = (models) => {
        Ep_tags.belongsTo(models.episodes, {
            foreignKey: 'Fk_Episode',
            as: 'episode'
        });
        Ep_tags.belongsTo(models.tags, {
            foreignKey: 'Fk_Tags',
            as: 'tag'
        });
    };

    return Ep_tags;
};