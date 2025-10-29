const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Service = db.define("service", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_workshop: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'workshop', // Reference the table name directly
            key: 'id'
        }
    },
    id_type: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'type', // Reference the table name directly
            key: 'id'
        }
    },
},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Service
};