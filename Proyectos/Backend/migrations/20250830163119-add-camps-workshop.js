'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('workshop', 'id_suscription', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'suscription', // Reference the table name directly
        key: 'id'
      }
    });
    await queryInterface.addColumn('workshop', 'id_type_workshop', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'type_workshop', // Reference the table name directly
        key: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('workshop', 'id_suscription');
    await queryInterface.removeColumn('workshop', 'id_type_workshop');
  }
};
