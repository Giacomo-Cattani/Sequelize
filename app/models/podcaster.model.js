import { DataTypes } from 'sequelize';
const Podcaster = (sequelize) => {
    const Podcaster = sequelize.define('Podcaster', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Surname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Username: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        BirthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'podcaster',
        timestamps: false
    });

    return Podcaster;
};

export { Podcaster };
