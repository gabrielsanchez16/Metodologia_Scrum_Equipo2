const {getAllBrands,getBrandByName} = require('../controllers/brand.controller.js');


const getAll = async (req, res) => {
    try {
        const brands = await getAllBrands();
        res.status(200).json({
            message: 'Busqueda completada',
            brands
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


const getByName = async (req, res) => {
    const { name } = req.params;

    if (!name) {
        return res.status(400).json({ message: 'El nombre de la marca es obligatorio' });
    }

    try {
        const brand = await getBrandByName(name);
        res.status(200).json({
            message: `Busqueda completada`,
            brand
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAll,
    getByName
};