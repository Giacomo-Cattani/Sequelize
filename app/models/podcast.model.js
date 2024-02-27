import { DataTypes } from 'sequelize';

const Podcast = (sequelize) => {
    const PodcastModel = sequelize.define('Podcast', {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        CreateDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'podcast',
        timestamps: false
    });

    return PodcastModel;
};

export { Podcast };
