const {createWorkOrder,deleteWorkOrder,getWorkOrderById,getWorkOrderByMechanic,getWorkOrderByMotorcycle,updateWorkOrder} = require('../controllers/workOrder.controller.js');


const create = async (req, res) => {
    const { title,date,description,recommendations,price,id_motorcycle,id_mechanic,discount } = req.body;
    try {
        const newWorkOrder = await createWorkOrder(title,date,description,recommendations,price,id_motorcycle,id_mechanic,discount);
        res.status(201).json({
            message: 'Orden de trabajo creada exitosamente',
            workOrder: newWorkOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID de la orden de trabajo es requerido' });
    }
    try {
        const response = await deleteWorkOrder(id);
        res.status(200).json({ message: 'Orden de trabajo eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID de la orden de trabajo es requerido' });
    }
    try {
        const workOrder = await getWorkOrderById(id);
        res.status(200).json({
            message: 'Orden de trabajo obtenida exitosamente',
            workOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getByMechanic = async (req, res) => {
    const { id_mechanic } = req.params;
    if (!id_mechanic) {
        return res.status(400).json({ message: 'ID del mecánico es requerido' });
    }
    try {
        const workOrders = await getWorkOrderByMechanic(id_mechanic);
        res.status(200).json({
            message: 'Órdenes de trabajo obtenidas exitosamente',
            workOrders
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updated = async (req, res) => {
    const { id,title,date,description,recommendations,price,id_motorcycle,id_mechanic,discount } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID de la orden de trabajo es requerida' });
    }

    try {
        const updatedWorkOrder = await updateWorkOrder(id,title,date,description,recommendations,price,id_motorcycle,id_mechanic,discount);
        res.status(200).json({
            message: 'Orden de trabajo actualizada exitosamente',
            workOrder: updatedWorkOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getByMotorcycle = async (req, res) => {
    const { id_motorcycle } = req.params;
    if (!id_motorcycle) {
        return res.status(400).json({ message: 'ID de la motocicleta es requerido' });
    }
    try {
        const workOrders = await getWorkOrderByMotorcycle(id_motorcycle);
        res.status(200).json({
            message: 'Órdenes de trabajo obtenidas exitosamente',
            workOrders
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    create,
    deleteOrder,
    getById,
    getByMechanic,
    updated,
    getByMotorcycle
}