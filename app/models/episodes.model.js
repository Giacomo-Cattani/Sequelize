const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Episode = sequelize.define('Episode', {
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    CreationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Fk_Podcast: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Podcast',
            key: 'Id'
        }
    }
}, {
    tableName: 'episodes',
    timestamps: false
});

module.exports = Episode;
