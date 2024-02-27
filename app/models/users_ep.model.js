module.exports = (sequelize, Sequelize) => {
    const UsersEp = sequelize.define("users_ep", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        StartDate: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        EndDate: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        Fk_User: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Fk_Ep: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'users_ep',
        timestamps: false
    });

    UsersEp.associate = (models) => {
        UsersEp.belongsTo(models.episodes, {
            foreignKey: 'Fk_Ep',
            as: 'episode'
        });
        UsersEp.belongsTo(models.users, {
            foreignKey: 'Fk_User',
            as: 'user'
        });
    };

    return UsersEp;
};