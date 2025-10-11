'use strict';
const { v4: uuidv4 } = require('uuid');
 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brand', [
      // Europa
      { id: uuidv4() ,name: 'Narita', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Mapache', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Bosch', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Denso', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'ACDelco', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Valeo', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Magneti Marelli', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Mann Filter', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Fram', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'NGK', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Motul', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Liqui Moly', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Castrol', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Shell', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Brembo', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'EBC Brakes', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Ferodo', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'KYB', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'KYN', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Pysta', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Mobil', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Havoline', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Yamablue', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Ridemod', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Imbra', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Darrow', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'GX', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Vitrix', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Kontrol', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Roko', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Revo', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Magna', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Choho', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4() ,name: 'Spartan', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('brand', {
      name: {
        [Sequelize.Op.in]: [
          'Kontrol', 'Roko', 'Revo', 'Magna', 'Choho', 'Spartan', 'KYN', 'Liqui Moly', 'Motul', 'Castrol', 'Pysta', 'Mobil', 'Havoline', 'Yamablue', 'Ridemod', 'Imbra', 'Darrow', 'GX', 'Vitrix', 'Denso'
        ]
      }
    }, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
