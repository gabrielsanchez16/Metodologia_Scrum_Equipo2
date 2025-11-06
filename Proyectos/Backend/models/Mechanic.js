const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

// Modelo de mecanicos del taller
const Mechanic = db.define("mechanic", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    // Nombre del mecanico
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    freezeTableName: true // 👈 evita la pluralización automática
});


module.exports = {
    Mechanic
};