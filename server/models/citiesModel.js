const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const citiesModel = sequelize.define('cities', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
module.exports = citiesModel;
