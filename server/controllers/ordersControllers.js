const orders = require('../models/ordersModel');
const products = require('../models/productsModel');
const cart = require('../models/cartModel');
const cartProducts = require('../models/cartProductsModel');
const users = require('../models/usersModel');
const categories = require('../models/categoriesModel');
const cities = require('../models/citiesModel');


exports.countOrders = async (req, res) => {
    await orders.findAndCountAll().then(result => {
        console.log("orders:",result);
        res.send(result)    
    }).catch(err => {
        res.send("error countOrders")
    })  
}
exports.getAllCities = async (req, res) => {
    await cities.findAll().then(result => {
        console.log("getAllCities:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getAllCities")
    })
}
exports.getLatestOrder = async (req, res) => {
    await orders.findOne({order: [ [ 'createdAt', 'DESC' ]],where:{userId:req.query.userId}}).then(result => {
        console.log("getAllOrders:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getAllOrders")
    })
}

exports.checkDeliveryDate = async (req, res) => {
    await orders.findAll({where:{deliveryDate:req.query.deliveryDate}}).then(result => {
        console.log("checkOrderDate:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error checkOrderDate")
    })
}

exports.createOrder = async (req, res) => {
    console.log(req.body)
    await orders.create(req.body).then(result => {
        console.log("createOrder:",result);
         cart.update({isOpen:false},{where:{id:req.body.cartId}})
        res.send(result)
    }).catch(err => {
        res.send("error createOrder" + JSON.stringify(err))
    })

}
