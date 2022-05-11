const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const cartModel = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  createTime: {
    type: Sequelize.STRING,
    allowNull: true
  },
  isOpen: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  }
});
module.exports = cartModel;
