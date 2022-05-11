const con = require('../utils/database')
const orders = require('../models/ordersModel');
const products = require('../models/productsModel');
const cart = require('../models/cartModel');
const cartProducts = require('../models/cartProductsModel');
const users = require('../models/usersModel');
const categories = require('../models/categoriesModel');


exports.register = async (req, res) => {
    users.create(req.body).then(result => {
        console.log("result: ",result)
        res.send(result)
    }).catch(err => {
        res.send("error register" + JSON.stringify(err))
    })           
}
exports.loginCheck = async (req, res) => {
    await users.findOne({ where: { email: req.body.email, password: req.body.password }}).then(result => {
        console.log(result);
        res.send(result)        
    }).catch(err => {
        res.send("error loginCheck")
    })
}
exports.getUserById = async (req, res) => {
    await users.findAll({where:{id:req.query.id}}).then(result => {
        console.log(result);
        res.send(result)        
    }).catch(err => {
        res.send("error getUserById")
    })
}
exports.checkId = async (req, res) => {
    console.log("personalId:",req.query.personalId)
    await users.findOne({where:{personalId:req.query.personalId}}).then(result => {
        console.log("findOne:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error checkId")
    })
}

