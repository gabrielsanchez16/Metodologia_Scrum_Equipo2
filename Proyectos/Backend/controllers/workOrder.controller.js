const { WorkOrder } = require('../models/WorkOrder.js');
const { ServiceByWorkshop } = require('../models/ServiceByWorkshop.js');
const { Service } = require('../models/Service.js');
const { Photo } = require('../models/Photo.js');
const {Motorcycle} = require("../models/Motorcycle.js");
const {Owner} = require("../models/Owner.js");

const { sendSMS } = require('../utils/msgService.js');


const createWorkOrder = async (title, date, description, recommendations, price, id_motorcycle, id_mechanic,discount) => {
    try {
        
        const motorcycle = await Motorcycle.findByPk(id_motorcycle);
        const owner = await Owner.findByPk(motorcycle.id_owner);

        

        // 👇 acá llamamos al servicio externo
        
        const newWorkOrder = await WorkOrder.create({
            title,
            date,
            description,
            recommendations,
            price,
            id_motorcycle,
            id_mechanic,
            discount
        });
        
         await sendSMS(
            `Hola ${owner.name}, su ${motorcycle.model} tiene una orden de trabajo creada. visita este link para que puedas ver y mantenerte actualizado del estado de tu moto https://systemworkshop.shop/order/view?id=${newWorkOrder.id}&iduser=${owner?.id_workshop}`,
            owner.phone
        );

        return newWorkOrder;
    } catch (error) {
        throw error;
    }
}

const getWorkOrderById = async (id) => {
    const workOrder = await WorkOrder.findOne({
        where: { id },
        include: [
            {
                model: ServiceByWorkshop
            },
            {
                model: Photo
            }
        ]
    });
    return workOrder;
};

const getWorkOrderByMotorcycle = async (id_motorcycle) => {
    try {
        const workOrders = await WorkOrder.findAll({
            where: { id_motorcycle }
        });
        return workOrders;
    } catch (error) {
        throw error;
    }
}


const getWorkOrderByMechanic = async (id_mechanic) => {
    try {
        const workOrders = await WorkOrder.findAll({
            where: { id_mechanic }
        });
        return workOrders;
    } catch (error) {
        throw error;
    }
}

const updateWorkOrder = async (id, title, date, description, recommendations, price, id_motorcycle, id_mechanic,discount) => {
    try {
        const workOrder = await WorkOrder.findOne({
            where: { id }
        });
        if (!workOrder) {
            throw new Error('Orden de trabajo no encontrada');
        }
        if (title) workOrder.title = title;
        if (date) workOrder.date = date;
        if (description) workOrder.description = description;
        if (recommendations) workOrder.recommendations = recommendations;
        if (price) workOrder.price = price;
        if (id_motorcycle) workOrder.id_motorcycle = id_motorcycle;
        if (id_mechanic) workOrder.id_mechanic = id_mechanic;
        if (discount) workOrder.discount = discount;

        const motorcycle = await Motorcycle.findByPk(id_motorcycle);
        const owner = await Owner.findByPk(motorcycle.id_owner);

        // 👇 acá llamamos al servicio externo
        const response = await sendSMS(
            `Hola ${owner.name}, su ${motorcycle.model} tuvo una actualización. visita este link para que puedas ver y mantenerte actualizado del estado de tu moto https://systemworkshop.shop/order/view?id=${workOrder.id}&iduser=${owner?.id_workshop}`,
            owner.phone
        );

        await workOrder.save();
        return workOrder;
    } catch (error) {
        throw error;
    }
}

const deleteWorkOrder = async (id) => {
    try {
        // Buscar y eliminar fotos asociadas
        const photos = await Photo.findAll({ where: { id_order: id } });

        for (const photo of photos) {
            if (photo.id_public) {
                try {
                    await cloudinary.uploader.destroy(photo.id_public);
                } catch (cloudError) {
                    console.error(`Error eliminando imagen de Cloudinary: ${cloudError.message}`);
                }
            }

            try {
                await photo.destroy();
            } catch (dbPhotoError) {
                console.error(`Error eliminando foto de la base de datos: ${dbPhotoError.message}`);
            }
        }

        const services = await ServiceByWorkshop.findAll({ where: { id_order: id } });
        for (const service of services) {
            try {
                await service.destroy();
            } catch (dbServiceError) {
                console.error(`Error eliminando servicio de la base de datos: ${dbServiceError.message}`);
            }
        }
        // Buscar la orden de trabajo
        const workOrder = await WorkOrder.findOne({ where: { id } });
        if (!workOrder) {
            throw new Error('Orden de trabajo no encontrada');
        }

        await workOrder.destroy();
        return true;

    } catch (error) {
        console.error(`Error al eliminar la orden de trabajo: ${error.message}`);
        throw error;
    }
};



module.exports = {
    createWorkOrder,
    getWorkOrderById,
    getWorkOrderByMotorcycle,
    updateWorkOrder,
    deleteWorkOrder,
    getWorkOrderByMechanic
}