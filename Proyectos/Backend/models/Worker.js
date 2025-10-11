const { Sequelize, DataTypes, UUID } = require('sequelize');
const { db } = require('../config/db.js');
const bcrypt = require('bcrypt') 

const Worker = db.define("worker", {
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
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    suscription:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: {
                msg: 'El correo electrónico debe ser válido'
            },
            notEmpty: {
                msg: 'El correo electrónico no puede estar vacío'
            }
        }
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_logo_public: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dateSuscription: {
        type: DataTypes.DATE,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    modules: {
        type: DataTypes.JSON,
        allowNull: false
    },
    id_role:{
        type: UUID,
        allowNull: false,
        references: {
            model: 'role', // Reference the table name directly
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
    },
    id_suscription: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'suscription', // Reference the table name directly
            key: 'id'
        }
    }
},{
    freezeTableName: true, // 👈 evita la pluralización automática
    hooks: {
        beforeCreate: async function(worker) {
            const salt = await bcrypt.genSalt(10)
            worker.password = await bcrypt.hash(worker.password, salt)
        },
        beforeUpdate: async (worker) => {
            if (worker.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                worker.password = await bcrypt.hash(worker.password, salt);
            }
        }

    }
})

//metodo personalizado

Worker.prototype.verificarPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}



module.exports = {
    Worker
};