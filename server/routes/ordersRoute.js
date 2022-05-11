const express = require('express');
const router = express.Router();
ordersControllers = require('../controllers/ordersControllers')

router.get('/countOrders', ordersControllers.countOrders);
router.post('/createOrder', ordersControllers.createOrder); 
router.get('/getAllCities', ordersControllers.getAllCities); 
router.get('/getLatestOrder', ordersControllers.getLatestOrder); 
router.get('/checkDeliveryDate', ordersControllers.checkDeliveryDate); 

module.exports = router;
