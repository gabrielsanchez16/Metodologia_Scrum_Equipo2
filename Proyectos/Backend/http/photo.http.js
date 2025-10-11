const {registerPhoto,deletePhoto,updatePhoto} = require('../controllers/photo.controller.js');


const registerPhotoHandler = async (req, res) => {
    const path = req.file?.path;
    const public_id = req.file?.filename;
    const { id_order } = req.body;

    if (!path || !public_id || !id_order) {
        return res.status(400).json({ error: 'Faltan datos necesarios para registrar la foto' });
    }

    try {
        const newPhoto = await registerPhoto(id_order, path, public_id);
        return res.status(201).json({
            message: 'Foto registrada correctamente',
            photo: newPhoto
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updatePhotoHandler = async (req, res) => {
    const { id } = req.params;
    const path = req.file?.path;
    const public_id = req.file?.filename;

    if (!path || !public_id) {
        return res.status(400).json({ error: 'Faltan datos necesarios para actualizar la foto' });
    }

    try {
        const updatedPhoto = await updatePhoto(id, path, public_id);
        return res.status(200).json({
            message: 'Foto actualizada correctamente',
            photo: updatedPhoto
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletePhotoHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deletePhoto(id);
        return res.status(200).json({ message: 'Foto eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    registerPhotoHandler,
    updatePhotoHandler,
    deletePhotoHandler
};