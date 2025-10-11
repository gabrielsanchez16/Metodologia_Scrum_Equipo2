'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('work_order', 'discount', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('workshop', 'city', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('workshop', 'address', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('work_order', 'discount');
    await queryInterface.removeColumn('workshop', 'city');
    await queryInterface.removeColumn('workshop', 'address');
  }
};
