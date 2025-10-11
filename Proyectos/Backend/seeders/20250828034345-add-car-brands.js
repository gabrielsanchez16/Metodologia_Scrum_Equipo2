'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('brand', [
      // Europa
      { id: '00000000-0000-0000-0000-000000000001', name: 'Audi', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000002', name: 'BMW', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000003', name: 'Mercedes-Benz', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000004', name: 'Volkswagen', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000005', name: 'Renault', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000006', name: 'Fiat', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000007', name: 'Peugeot', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000008', name: 'Ferrari', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000009', name: 'Lamborghini', createdAt: new Date(), updatedAt: new Date() },
      // América del Norte
      { id: '00000000-0000-0000-0000-000000000010', name: 'Ford', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000011', name: 'Chevrolet', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000012', name: 'Tesla', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000013', name: 'Cadillac', createdAt: new Date(), updatedAt: new Date() },
      // Asia
      { id: '00000000-0000-0000-0000-000000000014', name: 'Toyota', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000015', name: 'Honda', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000016', name: 'Nissan', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000017', name: 'Hyundai', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000018', name: 'Kia', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000020', name: 'Mazda', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000021', name: 'Lexus', createdAt: new Date(), updatedAt: new Date() },
      // Otros
      { id: '00000000-0000-0000-0000-000000000022', name: 'Volvo', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000023', name: 'Jaguar', createdAt: new Date(), updatedAt: new Date() },
      { id: '00000000-0000-0000-0000-000000000024', name: 'Land Rover', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brand', {
      name: {
        [Sequelize.Op.in]: [
          'Audi','BMW','Mercedes-Benz','Volkswagen','Renault','Fiat','Peugeot','Ferrari','Lamborghini',
          'Ford','Chevrolet','Tesla','Cadillac',
          'Toyota','Honda','Nissan','Hyundai','Kia','Suzuki','Mazda','Lexus',
          'Volvo','Jaguar','Land Rover'
        ]
      }
    }, {});
  }
};
