module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        BirthDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: false
    });
    return User;
};