// Microservices routes will go here! 
const express = require('express');
const router = express.Router();

router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/create', require('./create'));
router.use('/search', require('./search'));
router.use('/searchuser', require('./searchuser'));
router.use('/addevent', require('./userRegistersForEvent'));
router.use('/searchregisteredeventsbyuser', require("./lookupParticipationHistory"));


module.exports = router; 
