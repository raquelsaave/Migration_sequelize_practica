'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mascotas',
    [
      {
          raza:'chihuahua',
          precio:200,
          tamaño:'chico',
          color:'negro',
          sexo:'macho',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          raza:'husky',
          precio:2200,
          tamaño:'mediano',
          color:'cafe',
          sexo:'hembra',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          raza:'tortuga',
          precio:100,
          tamaño:'chica',
          color:'verde',
          sexo:'hembra',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          raza:'tortuga2',
          precio:100,
          tamaño:'grande',
          color:'negro',
          sexo:'macho',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
