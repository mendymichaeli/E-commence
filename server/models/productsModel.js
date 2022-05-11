const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const productsModel = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
 
  },
  price: {
    type: Sequelize.STRING,
    allowNull: true

  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
 
  },
  categoryId: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  }
});
module.exports = productsModel;