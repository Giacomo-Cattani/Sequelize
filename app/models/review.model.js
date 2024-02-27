module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Comment: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        Fk_User: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'Id'
            }
        },
        Fk_Ep: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'episodes',
                key: 'Id'
            }
        }
    }, {
        tableName: 'review',
        engine: 'InnoDB',
        charset: 'utf8mb4'
    });

    Review.associate = (models) => {
        Review.belongsTo(models.User, {
            foreignKey: 'Fk_User',
            as: 'user'
        });
        Review.belongsTo(models.Episode, {
            foreignKey: 'Fk_Ep',
            as: 'episode'
        });
    };

    return Review;
};