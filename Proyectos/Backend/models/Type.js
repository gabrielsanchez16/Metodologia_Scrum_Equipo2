const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Type = db.define("type", {
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
    Type
};