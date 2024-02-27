import { DataTypes } from 'sequelize';

const EpTag = (sequelize, Sequelize) => {
    const Ep_tags = sequelize.define("ep_tags", {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fk_Tags: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Fk_Episode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'ep_tags',
        timestamps: false
    });

    Ep_tags.associate = (models) => {
        Ep_tags.belongsTo(models.episodes, {
            foreignKey: 'Fk_Episode',
            as: 'episode'
        });
        Ep_tags.belongsTo(models.tags, {
            foreignKey: 'Fk_Tags',
            as: 'tag'
        });
    };

    return Ep_tags;
};

export { EpTag }; // Exporting the EpTag function

export default EpTag; // Exporting the EpTag function as default
