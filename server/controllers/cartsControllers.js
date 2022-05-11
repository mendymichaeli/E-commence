const orders = require('../models/ordersModel');
const products = require('../models/productsModel');
const cart = require('../models/cartModel');
const cartProducts = require('../models/cartProductsModel');
const users = require('../models/usersModel');
const categories = require('../models/categoriesModel');

exports.getCartByUserId = async (req, res) => {
    await cart.findOne({ where:{userId:req.query.userId ,isOpen:true},include: [{model:users},{model:cartProducts,include:{model:products}}] }).then(result => {
        console.log("getCartByUserId:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error getCartByUserId")
    })
}

exports.addProduct = async (req, res) => {
    await cartProducts.create(req.body).then(result => {
        console.log("addProductToCart:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error addProductToCart")
    })
}
exports.openCart = async (req, res) => {
    console.log("open:",req.body)
    await cart.create(req.body).then(result => {
        console.log("openCart:",result);
        res.send(result)        
    }).catch(err => {
        res.send("error openCart")
    })
}
exports.deleteAllProducts = async (req, res) => {
    console.log(req.query.cartId)
    await cartProducts.destroy({
        where : {cartId : req.query.cartId}
        }).then(result => {
        console.log("status:",result);
        res.status(200).send(String(result))
    }).catch(err => {
        res.status("error deleteAllProducts")
    })
}
exports.deleteProductById = async (req, res) => {
    console.log(req.query.id)
    await cartProducts.destroy({
        where : {id : req.query.id}
        }).then(result => {
        console.log("41:",result);
        res.status(200).send(String(result))
    }).catch(err => {
        res.status("error deleteProductById")
    })
}
exports.updateQuantityById = async (req, res) => {

    console.log("req.body.quantity:", req.body.quantity)
    console.log("req.body.type:", req.body.type)
    if(req.body.quantity<=1 && req.body.type==0){
        await cartProducts.destroy({ where: { cartId: req.body.cartId ,productId:req.body.productId}}).then(result => {
            console.log("41:",result);
            res.status(200).send(String(result))
        }).catch(err => {
            res.status("error deleteProductById")
        }) 

        return
    } else{
        qu = req.body.quantity
        if(req.body.type==1){
         req.body.quantity=qu+1
        }else { 
            console.log("quantity less 1:",req.body.quantity)
         if(req.body.quantity>0){
             req.body.quantity=qu-1
             console.log("quantity less:",req.body.quantity)
         }else{
             console.log("done:",req.body.quantity)
             return
         }
       
        }
     
        await cartProducts.update({quantity:req.body.quantity}, { where: { cartId: req.body.cartId ,productId:req.body.productId}}).then(result => {
            console.log("result:",result)
            
             res.send(result)
         }).catch(err => {
             res.send("error updateQuantityById" + JSON.stringify(err))
         }) 

    }
   
   
}
