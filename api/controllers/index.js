// Microservices routes will go here! 
const express = require('express');
const router = express.Router();

router.use('/register', require('./register'));
router.use('/login', require('./login'));

module.exports = router; 
