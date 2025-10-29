const { Motorcycle } = require('../models/Motorcycle.js');
const {Owner} = require("../models/Owner.js")
const {Brand} = require("../models/Brand.js"); // revisado importante del modelo
const { WorkOrder } = require('../models/WorkOrder.js');
const { ServiceByWorkshop } = require('../models/ServiceByWorkshop.js');

const createMotorcycle = async (model, plate, year, id_workshop, id_brand, id_owner) => {
    const existMotorcycle = await Motorcycle.findOne({ where: { plate,id_workshop  } });
    if (existMotorcycle) {
        throw new Error('Ya existe una motocicleta con esta placa');
    };
    const motorcycle = await Motorcycle.create({
        model,
        plate,
        year,
        id_workshop,
        id_brand,
        id_owner
    });

    return motorcycle;
};

const getAllMotorcycles = async (id_workshop) => {
    let motorcycles = await Motorcycle.findAll({
        where: {
            id_workshop
        },
        include: [
            {
                model: Owner
            },
            {
                model:Brand
            },
            {
                model:WorkOrder
            }
        
        ]
    });
    if (!motorcycles || motorcycles.length === 0) {
        motorcycles = []
    }
    return motorcycles;
}

const getMotorcycleById = async (id) => {
    let motorcycle = await Motorcycle.findByPk(id,{
        include: [
            {
                model: Owner
            },
            {
                model:Brand
            },
            {
                model:WorkOrder,
                include:[
                    {
                        model: ServiceByWorkshop
                    }
                ]
            }
        ]
    });
    if (!motorcycle) {
        motorcycle = 'Motocicleta no encontrada';
    }
    return motorcycle;
}

const deleteMotorcycle = async (id) => {
    const motorcycle = await Motorcycle.findByPk(id);
    if (!motorcycle) {
        throw new Error('Motocicleta no encontrada');
    }
    await motorcycle.destroy();
    return 'Motocicleta eliminada correctamente';
}

const updateMotorcycle = async (id, model, plate, year, id_brand, id_owner) => {
    const motorcycle = await Motorcycle.findByPk(id);
    if (!motorcycle) {
        throw new Error('Motocicleta no encontrada');
    }


    if (plate !== undefined) {
        const existPlate = await Motorcycle.findOne({ where: { plate, id_workshop: motorcycle.id_workshop } });

        if (existPlate && existPlate.id !== id) {
            throw new Error('Ya existe una motocicleta con esta placa en el taller');
        }
        motorcycle.plate = plate;
    }

    // Actualizar otros campos si se proporcionan
    if (model !== undefined) motorcycle.model = model;
    if (year !== undefined) motorcycle.year = year;
    if (id_brand !== undefined) motorcycle.id_brand = id_brand;
    if (id_owner !== undefined) motorcycle.id_owner = id_owner;

    await motorcycle.save();

    return motorcycle;
}
 // Exportar las funciones del controlador
module.exports = {
    createMotorcycle,
    getAllMotorcycles,
    getMotorcycleById,
    deleteMotorcycle,
    updateMotorcycle
}

//Agregando notas importantes para el desarrollo futuro y funcionalidades 
//Nota: Al actualizar la placa de una motocicleta, se verifica que la nueva placa no esté ya registrada en el mismo taller para evitar duplicados.