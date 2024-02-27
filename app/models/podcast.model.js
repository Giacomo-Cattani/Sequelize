const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Podcast = sequelize.define('Podcast', {
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

module.exports = Podcast;
