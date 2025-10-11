const {createServiceByWorkshop,deleteService,getAllServicesByOrder,updateService,getServiceByWorkshop} = require('../controllers/serviceByWorkshop.controller');


const create = async (req, res) => {
    const {name_service,quantity_order,price_unit,id_order,id_service,id_workshop} = req.body;

    try {
        const service = await createServiceByWorkshop(name_service,quantity_order,price_unit,id_order,id_service,id_workshop);
        res.status(201).json({
            message: 'Servicio Asignado correctamente',
            service: service
        });
    } catch (error) {
        res.status(500).json({message: 'Error creating service by workshop', error: error.message});
    }
}


const getAll = async (req, res) => {
    const {id_order} = req.params;

    if (!id_order) {
        return res.status(400).json({
            message: "El ID de la orden es obligatorio"
        });
    }

    try {
        const services = await getAllServicesByOrder(id_order);
        res.status(200).json({
            message: 'Servicios obtenidos correctamente',
            services: services
        });
    } catch (error) {
        res.status(500).json({message: 'Error fetching services by workshop', error: error.message});
    }
}

const deleteServiceHttp = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "El ID del servicio es obligatorio"
        });
    }

    try {
        await deleteService(id);
        res.status(200).json({
            message: 'Servicio eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({message: 'Error deleting service by workshop', error: error.message});
    }
}

const update = async (req, res) => {
    const { quantity_order,id } = req.body;

    if (!id) {
        return res.status(400).json({
            message: "El ID del servicio es obligatorio"
        });
    }

    try {
        const service = await updateService(id, quantity_order);
        res.status(200).json({
            message: 'Servicio actualizado correctamente',
            service: service
        });
    } catch (error) {
        res.status(500).json({message: 'Error updating service by workshop', error: error.message});
    }
}

const getServicesByWorkshopHttp = async (req, res) => {
    const { id_workshop } = req.params;

    if (!id_workshop) {
        return res.status(400).json({
            message: "El ID del taller es obligatorio"
        });
    }

    try {
        const services = await getServiceByWorkshop(id_workshop);
        res.status(200).json({
            message: 'Servicios obtenidos correctamente',
            services: services
        });
    } catch (error) {
        res.status(500).json({message: 'Error fetching services by workshop', error: error.message});
    }
}

module.exports = {
    create,
    getAll,
    deleteServiceHttp,
    update,
    getServicesByWorkshopHttp
}