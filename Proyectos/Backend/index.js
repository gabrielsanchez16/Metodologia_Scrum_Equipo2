const express = require('express')
const cors = require('cors')
const { db } = require('./config/db.js')
const dotenv = require('dotenv')
dotenv.config({ path: ".env" })
const initModels = require("./models/initModels")
const { Workshop } = require('./models/Workshop');
initModels() // Inicializar las asociaciones de los modelos

const cron = require('node-cron');

const { Op } = require('sequelize');



//* Archivos de Rutas

const workshopRouter = require('./routes/workshop.route.js').router
const ownerRouter = require('./routes/owner.route.js').router
const brandRouter = require('./routes/brand.route.js').router
const motorcycleRouter = require('./routes/motorcycle.route.js').router
const typeRouter = require('./routes/type.route.js').router
const typeWorkshopRouter = require('./routes/typesWorkshop.route.js').router
const serviceRouter = require('./routes/service.route.js').router
const mechanicRouter = require('./routes/mechanic.route.js').router
const workOrderRouter = require('./routes/workOrder.route.js').router
const serviceByWorkshopRouter = require('./routes/serviceByWorkshop.route.js').router
const photoRouter = require('./routes/photo.route.js').router
const suscriptionRouter = require("./routes/suscription.route.js").router

//* Configuraciones Iniciales
const app = express()


//Habilitar lectura de datos de formularios

app.use(cors()) //permitiendo acceso
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));


// Conexion a la base de datos

async function init() {
    try {
        // Conectar y sincronizar DB
        await db.authenticate();
        await db.sync(); // en prod usa migraciones en vez de sync

        console.log('✅ Conexión correcta a la base de datos');

        // Configurar CRON: todos los días a las 12:00 AM
        cron.schedule('0 0 * * *', async () => {
            try {
                const hoy = new Date();

                await Workshop.update(
                    { suscription: false },
                    {
                        where: {
                            dateSuscription: { [Op.lt]: hoy },
                            suscription: true
                        }
                    }
                );

                console.log("✅ Revisión diaria de suscripciones completada");
            } catch (error) {
                console.error("❌ Error en la tarea de suscripción:", error);
            }
        });

        console.log("⏰ CRON de suscripciones configurado");
    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:", error);
    }
}

init();



app.use("/api/v1/workshop", workshopRouter);
app.use("/api/v1/owner", ownerRouter);
app.use("/api/v1/brand", brandRouter);
app.use("/api/v1/motorcycle", motorcycleRouter);
app.use("/api/v1/type", typeRouter);
app.use("/api/v1/suscription", suscriptionRouter);
app.use("/api/v1/typeWorkshop", typeWorkshopRouter);
app.use("/api/v1/mechanic", mechanicRouter);
app.use("/api/v1/workOrder", workOrderRouter);
app.use("/api/v1/serviceByWorkshop", serviceByWorkshopRouter);
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/photo", photoRouter);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})


exports.default = app