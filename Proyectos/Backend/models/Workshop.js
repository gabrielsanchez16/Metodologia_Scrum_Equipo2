const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db.js');
const bcrypt = require('bcrypt') 

// Modelo de taller con encriptacion de contraseñas
const Workshop = db.define("workshop", {
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
    id_suscription: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'suscription', // Reference the table name directly
            key: 'id'
        }
    },
    id_type_workshop: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'type_workshop', // Reference the table name directly
            key: 'id'
        }
    }
},{
    freezeTableName: true, // 👈 evita la pluralización automática
    hooks: {
        // Hook para encriptar password antes de crear
        beforeCreate: async function(workshop) {
            const salt = await bcrypt.genSalt(10)
            workshop.password = await bcrypt.hash(workshop.password, salt)
        },
        // Hook para reencriptar si se actualiza el password
        beforeUpdate: async (workshop) => {
            if (workshop.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                workshop.password = await bcrypt.hash(workshop.password, salt);
            }
        }

    }
})

// Metodo para verificar contraseña
Workshop.prototype.verificarPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}



module.exports = {
    Workshop
};