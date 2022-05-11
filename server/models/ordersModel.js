const Sequelize = require('sequelize');
const sequelizeDBConnection = require('../utils/database')

const ordersModel = sequelizeDBConnection.define('orders', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    
    },
    cartId: {
        type: Sequelize.INTEGER(11),
        allowNull: false
   
    },
    totalPrice: {
        type: Sequelize.STRING,
        allowNull: false
   
    },
    deliveryDate: {
        type: Sequelize.STRING,
        allowNull: false
    
    },
    orderDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creditFourNumer: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    city: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {

    charset: 'utf8',
    collate: 'utf8_general_ci',
});

module.exports = ordersModel;