const express = require('express');
const router = express.Router();
cartsControllers = require('../controllers/cartsControllers')

router.get('/getCartByUserId', cartsControllers.getCartByUserId);
router.post('/addProduct', cartsControllers.addProduct); 
router.post('/openCart', cartsControllers.openCart); 
router.get('/deleteAllProducts', cartsControllers.deleteAllProducts); 
router.get('/deleteProductById', cartsControllers.deleteProductById); 
router.post('/updateQuantityById', cartsControllers.updateQuantityById); 



module.exports = router;