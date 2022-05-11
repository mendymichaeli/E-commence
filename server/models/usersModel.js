const Sequelize = require('sequelize');
const sequelize = require('../utils/database')

const usersModel = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  }, 
  personalId: {
    type: Sequelize.INTEGER(9),
    allowNull: true
  } 
});
module.exports = usersModel;



