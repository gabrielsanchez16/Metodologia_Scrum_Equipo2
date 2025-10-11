const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Photo = db.define("photo", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    public_id: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    id_order: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'work_order', // Reference the table name directly
            key: 'id'
        }
    }

},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Photo
};