const { Motorcycle } = require('../models/Motorcycle.js');
const {Owner} = require('../models/Owner.js');
const {Workshop} = require('../models/Workshop.js')


const createOwner = async (name,identification,id_workshop,phone,email) => {
    const existOwner = await Owner.findOne({ where: { identification } });
    if (existOwner) {
        throw new Error('Ya existe un propietario con esta identificación');
    };
    const existWorkshop = await Workshop.findOne({ where: { id:id_workshop } });
    if (!existWorkshop) {
        throw new Error('Taller no encontrado');
    }
    const newOwner = await Owner.create({
        name,
        identification,
        id_workshop,
        phone,
        email
    });

    return newOwner;
}

const getAllOwners = async (id_workshop) => {
    let owners = await Owner.findAll({
        where: {
            id_workshop
        }
    });
    if (!owners || owners.length === 0) {
        owners = "No hay clientes registrados en este taller"; 
    }
    return owners;
}

const getOwnerById = async (id) => {
    const owner = await Owner.findByPk(id);
    if (!owner) {
        throw new Error('Propietario no encontrado');
    }
    return owner;
}

const updateOwner = async (id, name, identification, phone, email) => {
    const owner = await Owner.findByPk(id);
    if (!owner) {
        throw new Error('Propietario no encontrado');
    }

    const existIdentification = await Owner.findOne({ where: { identification, id_workshop : owner.id_workshop} });

    
    if(name !== undefined) owner.name = name;
    if(identification !== undefined) owner.identification = identification;
    if(phone !== undefined) owner.phone = phone;
    if(email !== undefined) owner.email = email;

    await owner.save();
    return owner;
}

const deleteOwner = async (id) => {
    const owner = await Owner.findByPk(id);
    const motorcycles = await Motorcycle.findAll({ where: { id_owner: id } });

    if (motorcycles.length > 0) {
        throw new Error('No se puede eliminar el propietario porque tiene motocicletas asociadas');
    }
    if (!owner) {
        throw new Error('Propietario no encontrado');
    }

    await owner.destroy();

    return true
}


module.exports = {
    createOwner,
    getAllOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
}