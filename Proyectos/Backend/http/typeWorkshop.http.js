const {getAllTypes} = require("../controllers/typeWorkshop.controller")

const getAll = async (req, res) => {
    try {
        const types = await getAllTypes();
        res.status(200).json({
            message: "Tipos obtenidos exitosamente",
            typesWorkshop: types
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAll
}