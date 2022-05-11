const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const categoriesModel = sequelize.define('categories', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
module.exports = categoriesModel;
