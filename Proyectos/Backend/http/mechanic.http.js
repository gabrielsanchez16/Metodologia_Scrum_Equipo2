const {createMechanic,deleteMechanic,getMechanicsByWorkshop,editMechanic} = require('../controllers/mechanic.controller')

const create = async (req, res) => {
    const { name, id_workshop } = req.body;
    try {
        const mechanic = await createMechanic(name, id_workshop);
        res.status(201).json({
            message: 'Mecanico creado exitosamente',
            mechanic: mechanic
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const edit = async (req, res) => {
    const { name,id } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'El id del mecanico es obligatorio' });
    }
    if (!name) {
        return res.status(400).json({ error: 'El nombre del mecanico es obligatorio' });
    }
    try {
        const mechanic = await editMechanic(id, name);
        res.status(200).json({
            message: 'Mecanico actualizado exitosamente',
            mechanic: mechanic
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    const { id_workshop } = req.params;
    if (!id_workshop) {
        return res.status(400).json({ error: 'El id del taller es obligatorio' });
    }
    try {
        const mechanics = await getMechanicsByWorkshop(id_workshop);
        res.status(200).json({
            message: 'Lista de mecanicos obtenida exitosamente',
            mechanics: mechanics
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMechanicb = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'El id del mecanico es obligatorio' });
    }
    try {
        await deleteMechanic(id);
        res.status(200).json({
            message: 'Mecanico eliminado exitosamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    create,
    getAll,
    deleteMechanicb,
    edit
}