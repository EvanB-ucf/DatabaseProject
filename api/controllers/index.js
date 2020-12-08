// Microservices routes will go here! 
const express = require('express');
const router = express.Router();

router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/create', require('./create'));
router.use('/lookupEvent', require('./lookupEvent'));
router.use('/lookupEventByAdmin', require('./lookupEventByAdmin'));
router.use('/lookupActiveEventByAdmin', require('./lookupActiveEventByAdmin'));
router.use('/lookupParticipationHistory', require('./lookupParticipationHistory'));
router.use('/createEvent', require('./createEvent'));

module.exports = router;