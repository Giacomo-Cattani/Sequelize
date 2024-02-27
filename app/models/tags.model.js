import { Sequelize } from 'sequelize';

const Tag = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tag", {
        Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'tags',
        engine: 'InnoDB',
        charset: 'utf8mb4'
    });
    return Tag;
};

export { Tag };
