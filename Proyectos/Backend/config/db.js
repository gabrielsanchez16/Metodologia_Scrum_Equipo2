const {Sequelize} = require('sequelize')//importar sequelize
const dotenv = require('dotenv')//--- IGNORE ---
//Reestruturación para cargar variables de entorno creo que se rompio XD
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

