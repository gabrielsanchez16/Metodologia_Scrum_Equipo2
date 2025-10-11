const {createType,getAllTypes} = require('../controllers/type.controller');


const create = async (req, res) => {
    const {name} = req.body;
    try {
        const type = await createType(name);
        res.status(201).json({
            message: "Tipo creado exitosamente",
            type: type
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating type' });
    }
}

const getAll = async (req, res) => {
    try {
        const types = await getAllTypes();
        res.status(200).json({
            message: "Tipos obtenidos exitosamente",
            types: types
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching types' });
    }
}

module.exports = {
    create,
    getAll
}