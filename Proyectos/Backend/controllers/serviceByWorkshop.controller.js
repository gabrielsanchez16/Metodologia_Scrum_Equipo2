const { Service } = require('../models/Service.js');
const { ServiceByWorkshop } = require('../models/ServiceByWorkshop.js');
const { Workshop } = require('../models/Workshop.js');
const { MailtrapClient } = require('mailtrap');

const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const createServiceByWorkshop = async (name_service, quantity_order, price_unit, id_order, id_service, id_workshop) => {
  const price_total = quantity_order * price_unit;

  // 1. Verificar stock
  const serviceEx = await Service.findByPk(id_service);
  if (!serviceEx) {
    throw new Error("El servicio no existe");
  }


  const client = new MailtrapClient({ token: process.env.TOKEN_MAILTRAP });

  const quantityOperation = serviceEx.quantity - quantity_order;
  if (serviceEx.id_type !== "a0b2c3d4-e5f6-7890-1234-56789abcdefh") {
    if (quantityOperation >= 0) {
      serviceEx.quantity = quantityOperation;
      if (serviceEx.quantity <= 2) {

        const workshop = await Workshop.findByPk(id_workshop);
        const SENDER_EMAIL = "noreply@systemworkshop.shop";
        const RECIPIENT_EMAIL = workshop.email;
        await client.send({
          from: { name: "Aviso de inventario bajo", email: SENDER_EMAIL },
          to: [{ email: RECIPIENT_EMAIL }],
          template_uuid: "0df057a0-1546-4c99-8ee3-9533c8b24424",
          template_variables: { 
            part_name: name_service, 
            current_stock:serviceEx.quantity,
            min_stock:5
          }
        });
      }
      await serviceEx.save();
    } else {
      throw new Error("No hay suficiente cantidad de este servicio disponible");
    }
  }

  try {
    // 2. Buscar si ya existe el servicio para la misma orden
    const existingService = await ServiceByWorkshop.findOne({
      where: { id_order, id_service },
    });

    if (existingService) {
      // 3. Actualizar cantidades y precios
      existingService.quantity_order += quantity_order;
      existingService.price_total = existingService.quantity_order * existingService.price_unit;
      await existingService.save();

      return existingService;
    } else {
      // 4. Crear nuevo si no existe
      const service = await ServiceByWorkshop.create({
        name_service,
        quantity_order,
        price_unit,
        price_total,
        id_order,
        id_service,
        id_workshop
      });
      return service;
    }
  } catch (error) {
    throw error;
  }
};


const getAllServicesByOrder = async (id_order) => {
  try {
    const services = await ServiceByWorkshop.findAll({
      where: { id_order },
    });
    return services;
  } catch (error) {
    throw error;
  }
}

const deleteService = async (id) => {
  try {
    const serviceByWorkshop = await ServiceByWorkshop.findByPk(id);

    if (!serviceByWorkshop) {
      throw new Error("ServiceByWorkshop no encontrado");
    }

    const serviceOri = await Service.findByPk(serviceByWorkshop.id_service);

    if (serviceOri) {
      // Solo ajusta cantidad si no es del tipo especial
      if (serviceOri.id_type !== "a0b2c3d4-e5f6-7890-1234-56789abcdefh") {
        serviceOri.quantity += serviceByWorkshop.quantity_order;
        await serviceOri.save(); // 👈 importante
      }
    }

    // Eliminar el registro
    const deleted = await ServiceByWorkshop.destroy({ where: { id } });

    return deleted; // número de filas eliminadas
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    throw error;
  }
};


const updateService = async (id, quantity_order) => {
  const serviceByWorkshop = await ServiceByWorkshop.findByPk(id);
  if (!serviceByWorkshop) {
    throw new Error("Servicio no encontrado en la orden");
  }

  if (quantity_order <= 0) {
    throw new Error("La cantidad debe ser un número entero mayor que 0");
  }

  // Buscar el servicio original
  const serviceOri = await Service.findByPk(serviceByWorkshop.id_service);
  if (!serviceOri) {
    throw new Error("Servicio original no encontrado");
  }

   const client = new MailtrapClient({ token: process.env.TOKEN_MAILTRAP });

  // Calcular diferencia
  const diff = quantity_order - serviceByWorkshop.quantity_order;

  if (serviceOri.id_type !== "a0b2c3d4-e5f6-7890-1234-56789abcdefh") {
    if (diff > 0) {
      // 👉 se está aumentando la cantidad
      if (serviceOri.quantity < diff) {
        throw new Error("No hay suficiente stock disponible para aumentar la cantidad");
      }

      serviceOri.quantity -= diff; // quitar stock
      if (serviceOri.quantity <= 2) {
        const workshop = await Workshop.findByPk(serviceByWorkshop.id_workshop);
        const SENDER_EMAIL = "noreply@systemworkshop.shop";
        const RECIPIENT_EMAIL = workshop.email;
        await client.send({
          from: { name: "Aviso de inventario bajo", email: SENDER_EMAIL },
          to: [{ email: RECIPIENT_EMAIL }],
          template_uuid: "0df057a0-1546-4c99-8ee3-9533c8b24424",
          template_variables: { 
            part_name: serviceOri.name, 
            current_stock:serviceOri.quantity,
            min_stock:5
          }
        });
      }
      
    } else if (diff < 0) {
      // 👉 se está reduciendo la cantidad
      serviceOri.quantity += Math.abs(diff); // devolver stock
    }

    await serviceOri.save();
  }

  // Actualizar datos del ServiceByWorkshop
  serviceByWorkshop.quantity_order = quantity_order;
  serviceByWorkshop.price_total = quantity_order * serviceByWorkshop.price_unit;

  try {
    await serviceByWorkshop.save();
    return serviceByWorkshop;
  } catch (error) {
    throw error;
  }
};

const getServiceByWorkshop = async (id_workshop) => {
  try {
    const services = await ServiceByWorkshop.findAll({
      where: { id_workshop }
    });
    return services;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createServiceByWorkshop,
  getAllServicesByOrder,
  updateService,
  deleteService,
  getServiceByWorkshop
};