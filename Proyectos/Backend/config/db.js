const {Sequelize} = require('sequelize')
const dotenv = require('dotenv')
dotenv.config({path:'.env'})
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    define:{
        timestamps:true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
} );


module.exports ={
    db
}

// Nota: La configuración de Sequelize incluye la opción freezeTableName para evitar 
// la pluralización automática de los nombres de las tablas en la base de datos.
// pueden buscar que es eso muchachos..