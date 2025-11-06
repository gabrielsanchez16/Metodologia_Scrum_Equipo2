const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

// Modelo para roles de usuarios
const Role = db.define("role", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Role
};