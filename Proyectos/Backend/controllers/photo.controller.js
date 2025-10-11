const {Photo} = require('../models/Photo.js');
const cloudinary = require('cloudinary').v2;

const registerPhoto = async (id_order, path,public_id) => {
    try {
        const newPhoto = await Photo.create({
            id_order,
            path,
            public_id
        });
        return newPhoto;
    } catch (error) {
        throw error;
    }
}

const updatePhoto = async (id, path, public_id) => {

    try {
        const photo = await Photo.findByPk(id);
        if (!photo) {
            throw new Error('foto no encontrada');
        }
        await cloudinary.uploader.destroy(photo.public_id);
        photo.path = path;
        photo.public_id = public_id;
        await photo.save();
        return photo;
    } catch (error) {
        throw error;
    }
}

const deletePhoto = async (id) => {
    try {
        const photo = await Photo.findByPk(id);
        if (!photo) {
            throw new Error('foto no encontrada');
        }
        if (photo.public_id) {
            await cloudinary.uploader.destroy(photo.public_id);
        }
        await photo.destroy();
        return true;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    registerPhoto,
    updatePhoto,
    deletePhoto
};