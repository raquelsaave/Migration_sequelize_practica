'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Mascotas','peso', Sequelize.INTEGER,{
        after:'tamaño'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Mascotas','peso')
  }
};
