const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Motorcycle = db.define("motorcycle", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    plate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type: DataTypes.DATE,
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
    id_brand: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'brand', // Reference the table name directly
            key: 'id'
        }
    },
    id_owner: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'owner', // Reference the table name directly
            key: 'id'
        }
    }
    
},{
    freezeTableName: true, // 👈 evita la pluralización automática
});


module.exports = {
    Motorcycle
};