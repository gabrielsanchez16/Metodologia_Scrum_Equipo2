const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const ServiceByWorkshop = db.define("service_by_workshop", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Use Sequelize's built-in UUID function
        allowNull: false
    },
    name_service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity_order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price_unit: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_order: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'work_order', // Reference the table name directly
            key: 'id'
        }
    },
    id_service: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'service', // Reference the table name directly
            key: 'id'
        }
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
    ServiceByWorkshop
};