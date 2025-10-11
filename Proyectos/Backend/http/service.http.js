const { createService, deleteService, getAllServices, getServicesByName } = require('../controllers/service.controller.js');

const create = async (req, res) => {
    const { id, name, price, brand, quantity, id_type, id_workshop } = req.body;

    try {
        const response = await createService(id, name, price, brand, quantity, id_type, id_workshop);
        res.status(201).json({
            message: "Servicio creado correctamente",
            service: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el servicio",
            error: error.message
        });
    }


}

const getAll = async (req, res) => {
    const { id_workshop } = req.params;

    if (!id_workshop) {
        return res.status(400).json({
            message: "El ID del taller es obligatorio"
        });
    }

    try {
        const response = await getAllServices(id_workshop);
        res.status(200).json({
            message: "Servicios obtenidos correctamente",
            services: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los servicios",
            error: error.message
        });
    }
};

const getByName = async (req, res) => {
    const { name,id_workshop } = req.params;

    console.log(`Nombre del servicio: ${name}, ID del taller: ${id_workshop}`);
    if (!id_workshop) {
        return res.status(400).json({
            message: "El ID del taller es obligatorio"
        });
    }
    if (!name) {
        return res.status(400).json({
            message: "El nombre del servicio es obligatorio"
        });
    }

    try {
        const response = await getServicesByName(name, id_workshop);
        res.status(200).json({
            message: "Servicios obtenidos correctamente",
            services: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los servicios",
            error: error.message
        });
    }
};

const deleteServiceById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "El ID del servicio es obligatorio"
        });
    }

    try {
        const response = await deleteService(id);
        res.status(200).json({
            message: "Servicio eliminado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el servicio",
            error: error.message
        });
    }
};




module.exports = {
    create,
    getAll,
    getByName,
    deleteServiceById
}