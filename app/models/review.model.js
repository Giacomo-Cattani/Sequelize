import { DataTypes } from 'sequelize';

const Review = (sequelize) => {
    const ReviewModel = sequelize.define("review", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Stars: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Comment: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Fk_User: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'Id'
            }
        },
        Fk_Ep: {
            type: DataTypes.INTEGER,
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

    ReviewModel.associate = (models) => {
        ReviewModel.belongsTo(models.User, {
            foreignKey: 'Fk_User',
            as: 'user'
        });
        ReviewModel.belongsTo(models.Episode, {
            foreignKey: 'Fk_Ep',
            as: 'episode'
        });
    };

    return ReviewModel;
};

export { Review };
