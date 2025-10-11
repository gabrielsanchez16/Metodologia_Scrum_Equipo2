const {createOwner,deleteOwner,getAllOwners,getOwnerById,updateOwner} = require('../controllers/owner.controller.js');


const create = async(req,res) => {
    const {name,identification,email,phone,id_workshop} = req.body;

    try {
        const response = await createOwner(name,identification,id_workshop,phone,email) 
        res.status(201).json({
            message: `Cliente creado correctamente con el nombre: ${response?.name}`,
            owner: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getAll = async(req,res) => {

    const {id} = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El id del taller es obligatorio' });
    }
    try {
        const response = await getAllOwners(id);
        res.status(200).json({
            message: `Clientes obtenidos correctamente`,
            Owners: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getById = async(req,res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El id del propietario es obligatorio' });
    }

    try {
        const response = await getOwnerById(id);
        res.status(200).json({
            message: `Cliente obtenido correctamente`,
            Owner: response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const deleteById = async(req,res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({ message: 'El id del propietario es obligatorio' });
    }

    try {
        const response = await deleteOwner(id);
        res.status(200).json({
            message: `Cliente eliminado correctamente`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}


const updated = async(req,res) => {
    const {id} = req.params;
    const {name,identification,email,phone} = req.body;

    if (!id) {
        return res.status(400).json({ message: 'El id del propietario es obligatorio' });
    }

    try {
        const response = await updateOwner(id,name,identification,phone,email);
        res.status(200).json({
            message: `Cliente actualizado correctamente`,
            Owner: response
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
    updated
}