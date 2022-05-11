const express = require('express');
const router = express.Router();
usersControllers = require('../controllers/usersControllers')

router.post('/loginCheck', usersControllers.loginCheck);
router.post('/register', usersControllers.register); 
router.get('/checkId', usersControllers.checkId); 
router.get('/getUserById', usersControllers.getUserById); 


module.exports = router;