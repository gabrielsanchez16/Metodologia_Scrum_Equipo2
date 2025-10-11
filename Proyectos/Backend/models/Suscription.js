const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Suscription = db.define("suscription", {
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    benefits: {
        type: DataTypes.JSON,
        allowNull: false
    },
    modules: {
        type: DataTypes.JSON,
        allowNull: false
    }
},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Suscription
};