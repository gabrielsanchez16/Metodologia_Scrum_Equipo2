const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Owner = db.define("owner", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_workshop: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'workshop', // Reference the table name directly
            key: 'id'
        }
    }
},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Owner
};