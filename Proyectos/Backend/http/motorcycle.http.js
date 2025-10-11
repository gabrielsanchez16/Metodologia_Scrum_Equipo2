const {
    createMotorcycle,
    getAllMotorcycles,
    getMotorcycleById,
    deleteMotorcycle,
    updateMotorcycle
} = require('../controllers/motorcycle.controller.js');


const create = async (req, res) => {
    const { model, plate, year, id_workshop, id_brand, id_owner } = req.body;

    try {
        const response = await createMotorcycle(model, plate, year, id_workshop, id_brand, id_owner);
        res.status(201).json({
            message: `Motocicleta creada correctamente con la placa ${response?.plate}`,
            motorcycle: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getAll = async (req, res) => {
    const { id_workshop } = req.params;

    if (!id_workshop) {
        return res.status(400).json({ message: 'El id del taller es obligatorio' });
    }
    try {
        const response = await getAllMotorcycles(id_workshop);
        res.status(200).json({
            message: `Motocicletas obtenidas correctamente`,
            motorcycles: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El id de la motocicleta es obligatorio' });
    }

    try {
        const response = await getMotorcycleById(id);
        res.status(200).json({
            message: `Motocicleta obtenida correctamente`,
            motorcycle: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El id de la motocicleta es obligatorio' });
    }

    try {
        const response = await deleteMotorcycle(id);
        res.status(200).json({
            message: "Motocicleta eliminada correctamente",
            motorcycle: response

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const { model, plate, year, id_brand, id_owner } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'El id de la motocicleta es obligatorio' });
    }

    try {
        const response = await updateMotorcycle(id, model, plate, year, id_brand, id_owner);
        res.status(200).json({
            message: `Motocicleta actualizada correctamente`,
            motorcycle: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}