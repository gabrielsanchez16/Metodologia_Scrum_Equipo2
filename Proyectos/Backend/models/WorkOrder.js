const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const WorkOrder = db.define("work_order", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    recommendations: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    id_motorcycle: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'motorcycle', // Reference the table name directly
            key: 'id'
        }
    },
    id_mechanic: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'mechanic', // Reference the table name directly
            key: 'id'
        }
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }


},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    WorkOrder
};