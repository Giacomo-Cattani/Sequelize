import { DataTypes } from 'sequelize';
const UserEp = (sequelize, Sequelize) => {
    const UsersEp = sequelize.define("users_ep", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        StartDate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        EndDate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        Fk_User: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Fk_Ep: {
            type: DataTypes.INTEGER,
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

export { UserEp };
