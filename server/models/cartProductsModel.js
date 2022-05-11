const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const cartProductsModel = sequelize.define('cartProducts', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: true
 
  },
  quantity: {
    type: Sequelize.INTEGER(11),
    allowNull: true

  },
  cartId: {
    type: Sequelize.INTEGER(11),
    allowNull: true
 
  },
  productId: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  }
});
module.exports = cartProductsModel;