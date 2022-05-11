const express = require('express');
const router = express.Router();
productsControllers = require('../controllers/productsControllers')

router.get('/getAllProducts', productsControllers.getAllProducts);
router.get('/getAllCategories', productsControllers.getAllCategories);
router.get('/getProductsByCategory', productsControllers.getProductsByCategory);
router.get('/getProductsById', productsControllers.getProductsById);
router.post('/createProduct', productsControllers.createProduct); 
router.post('/updateProductById', productsControllers.updateProductById); 

module.exports = router;