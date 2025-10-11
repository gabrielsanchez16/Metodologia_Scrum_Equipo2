const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Mechanic = db.define("mechanic", {
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