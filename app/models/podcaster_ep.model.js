module.exports = (sequelize, Sequelize) => {
    const PodcasterEp = sequelize.define("podcaster_ep", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fk_Podcaster: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Fk_Episode: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'podcaster_ep',
        timestamps: false
    });

    PodcasterEp.associate = (models) => {
        PodcasterEp.belongsTo(models.Podcaster, {
            foreignKey: 'Fk_Podcaster',
            as: 'podcaster'
        });
        PodcasterEp.belongsTo(models.Episode, {
            foreignKey: 'Fk_Episode',
            as: 'episode'
        });
    };

    return PodcasterEp;
};