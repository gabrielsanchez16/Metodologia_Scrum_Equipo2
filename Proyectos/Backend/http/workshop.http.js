const WorkshopController = require('../controllers/workshop.controller.js');


const create = async (req, res) => {
    const { name, phone, email, password, city, address, id_type_workshop } = req.body;
    const logo = req.file?.path || null; // ← aquí está la URL pública en Cloudinary
    const id_logo_public = req.file?.filename || null; // ← aquí está el nombre del archivo en Cloudinary


    try {
        const response = await WorkshopController.createWorkshop(name, phone, email, password, logo,id_logo_public, city, address,id_type_workshop);
        res.status(201).json({
            message: `Taller creado correctamente con el nombre: ${response?.name}`,
            workshop: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const workshop = await WorkshopController.getWorkshopById(id);
        res.status(200).json({
            message: 'Taller encontrado',
            workshop
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const { name, phone, email, password, passwordConfirmation, city, address, id_type_workshop, id_suscription,suscription } = req.body;
    const logo = req.file?.path || null; // ← aquí está la URL pública en Cloudinary
    const id_logo_public = req.file?.filename || null; // ← aquí está el nombre del archivo en Cloudinary

    
    try {
        const response = await WorkshopController.editWorkshop(id, name, phone, email, password, logo, id_logo_public, passwordConfirmation, city, address,id_type_workshop,id_suscription,suscription);
        res.status(200).json({
            message: `Taller editado correctamente: ${response?.name}`,
            workshop: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const resetPasswordHttp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "El correo es requerido" });
    }

    try {
        const response = await WorkshopController.resetPassword(email);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

const deleteWorkshop = async (req, res) => {
    const { id } = req.params;

    try {
        await WorkshopController.deleteWorkshop(id);
        res.status(200).json({
            message: 'Taller eliminado correctamente'
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}



module.exports = {
    create,
    getById,
    edit,
    deleteWorkshop,
    resetPasswordHttp
}