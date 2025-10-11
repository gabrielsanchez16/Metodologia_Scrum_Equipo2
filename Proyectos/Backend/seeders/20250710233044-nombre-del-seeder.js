'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brand', [
      {
        id: 'a0b2c3d4-e5f6-7890-1234-56789abcde00',
        name: 'AKT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-f6a1-2332-6789-abcdef123466',
        name: 'Auteco',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-f6a1-2332-1789-abcdef123466',
        name: 'Yamaha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2c3d4e5-f6a1-2332-7789-abcdef123466',
        name: 'Suzuki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c3d4e5f6-a1b2-3344-8899-fedcba123456',
        name: 'Kawasaki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd4e5f6a1-b2c3-4455-9900-abcdef654321',
        name: 'Honda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e5f6a1b2-c3d4-5566-1122-abcdefabcdef',
        name: 'TVS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6a1b2c3-d4e5-6677-2233-123456abcdef',
        name: 'Bajaj',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a1b2c3d4-e5f6-7788-3344-987654321abc',
        name: 'Hero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b1c2d3e4-f5a6-8899-4455-abcdef987654',
        name: 'Victory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c1d2e3f4-a5b6-9900-5566-fedcba987654',
        name: 'Benelli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abc',
        name: 'Royal Enfield',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abp',
        name: 'Fratelli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789ab1',
        name: 'Vento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789ab3',
        name: 'Ducati',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789ab0',
        name: 'BMW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abz',
        name: 'Husqvarna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abq',
        name: 'Harley-Davidson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abn',
        name: 'Cfmoto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abm',
        name: 'KTM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abl',
        name: 'Triumph',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123456789abk',
        name: 'Aprilia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd1e2f3a4-b5c6-0011-6677-123756789abp',
        name: 'Bera',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    , {});
    
    await queryInterface.bulkInsert('type', [
      {
        id: 'a0b2c3d4-e5f6-7890-1234-56789abcdefh',
        name: 'Mano de obra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a0b2c3d4-e5f6-7890-1234-56789abcdefi',
        name: 'Repuesto',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('type', null, {});
    await queryInterface.bulkDelete('brand', null, {});
  }
};
