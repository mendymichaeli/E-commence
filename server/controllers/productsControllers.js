const con = require('../utils/database')
const orders = require('../models/ordersModel');
const products = require('../models/productsModel');
const cart = require('../models/cartModel');
const cartProducts = require('../models/cartProductsModel');
const users = require('../models/usersModel');
const categories = require('../models/categoriesModel');



exports.getAllProducts = async (req, res) => {
    await products.findAll({ include: [categories] }).then(result => {
        console.log("getAllProducts:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getAllProducts")
    })
}
exports.getProductsByCategory = async (req, res) => {
    await products.findAll( { include: [categories], where: { categoryId: req.query.id }}).then(result => {
        console.log("getProductsByCategory:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getProductsByCategory")
    })
}
exports.getProductsById = async (req, res) => {
    await products.findOne( { where: { id: req.query.id }}).then(result => {
        console.log("getProductsById:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getProductsById")
    })
}
exports.getAllCategories = async (req, res) => {
    await categories.findAll().then(result => {
        console.log("getAllCategories:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getAllCategories")
    })
}
exports.createProduct = async (req, res) => {
    console.log(req.body)
    await products.create(req.body).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error createProduct" + JSON.stringify(err))
    })
}
exports.updateProductById = async (req, res) => {
    let ob= req.body
    console.log(ob)
    await products.update(ob, { where: { id: req.body.id } }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send("error updateProductById" + JSON.stringify(err))
    })
}

