import { DataTypes } from 'sequelize';
const User = (sequelize) => {
    return sequelize.define("user", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        BirthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: false
    });
};

export { User };
