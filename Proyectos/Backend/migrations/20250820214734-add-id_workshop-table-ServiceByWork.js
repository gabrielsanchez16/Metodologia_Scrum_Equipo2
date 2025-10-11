'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('service_by_workshop', 'id_workshop', {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('service_by_workshop', 'id_workshop');
  }
};
