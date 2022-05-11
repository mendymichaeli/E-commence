
var mysql = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppingOnline', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


// sequelize.sync().then(function () {
//     console.log("Connected DB !!")
// }, function (err) {
//     console.log("Error connected DB !!", err)
// });


module.exports = sequelize;
