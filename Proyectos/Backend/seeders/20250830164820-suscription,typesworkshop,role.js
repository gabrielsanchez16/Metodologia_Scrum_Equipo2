'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suscription', [
      {
        id: uuidv4(),
        name: 'Plan Free',
        price: 0,
        description: 'La forma más simple de empezar a usar el sistema sin costo. Ideal para talleres que apenas inician.',
        benefits: JSON.stringify([
          "Gestión básica de clientes, mecánicos, órdenes e inventario",
          "Soporte comunitario básico",
          "Sin publicidad",
          "Sin multiusuarios",
          "Sin cotizaciones"
        ]),
        modules: JSON.stringify([
          "Clientes",
          "Mecanicos",
          "Ordenes",
          "Inventario",
          "Vehiculos"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Plan Beginner 1 mes',
        price: 20000,
        description: 'Ideal para talleres pequeños que quieren empezar a digitalizarse.',
        benefits: JSON.stringify([
          "Todo lo del Plan Free",
          "Soporte por correo",
          "Actualizaciones mensuales",
          "Cotizaciones"
        ]),
         modules: JSON.stringify([
          "Clientes",
          "Mecanicos",
          "Vehiculos",
          "Ordenes",
          "Inventario",
          "Cotizaciones"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Plan Professional 1 mes',
        price: 75000,
        description: 'Pensado para talleres que buscan un equilibrio entre costo y beneficios.',
        benefits: JSON.stringify([
          "Todo lo del Plan Beginner",
          "Publicidad en la plataforma (ubicación visible)",
          "Conexión directa con clientes",
          "Soporte rápido",
          "Actualizaciones semanales",
          "Cotizaciones"
        ]),
        modules: JSON.stringify([
          "Clientes",
          "Mecanicos",
          "Ordenes",
          "Inventario",
          "Cotizaciones",
          "Publicidad",
          "Vehiculos"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Plan Master 1 mes',
        price: 100000,
        description: 'Acceso casi sin límites para talleres que quieren crecer fuerte.',
        benefits: JSON.stringify([
          "Todo lo del Plan Professional",
          "Publicidad en la plataforma (ubicación visible)",
          "Multiusuarios: asesores y mecánicos",
          "Módulo de cotizaciones",
          "Mayor visibilidad en la plataforma",
          "Soporte prioritario",
          "Actualizaciones semanales"
        ]),
         modules: JSON.stringify([
          "Clientes",
          "Mecanicos",
          "Ordenes",
          "Inventario",
          "Vehiculos",
          "Cotizaciones",
          "Publicidad",
          "Multiusuarios"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

     await queryInterface.bulkInsert('role', [
      {
        id: uuidv4(),
        name: 'Asesor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Mecanico',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);

    await queryInterface.bulkInsert('type_workshop', [
      {
        id: uuidv4(),
        name: 'Taller Mecánico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Almacen de repuestos',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);


  },



  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suscription', null, {});
    await queryInterface.bulkDelete('role', null, {});
    await queryInterface.bulkDelete('type_workshop', null, {});
  }
};
