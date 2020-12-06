const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const eventID = req.body.idEVENTS;
        const loggedInUser = req.body.loggedInUser;
        const searchType = req.body.searchType;

        var userID = await mysql.findUserIDFromUserName(loggedInUser);
        console.log(userID);
        userID = userID[0].idUSERS;
        console.log(userID);

        // Prevents duplication into table. Verifies user isn't already registered 
        const verifySQL = "SELECT id FROM USER_REGISTERED_EVENTS WHERE idUser=\'" + userID + "\' AND idEvent=\'" + eventID + "\'";
        var isInTable = await mysql.exportedCustomSQL(verifySQL);
        if (isInTable.length > 0) {
            res.status(201).send({ message: 'User is already registered for the event!' });
            return;
        }

        // Then adds them to the table
        await mysql.createRegisteredEvent(userID, eventID);
        res.status(201).send({ message: 'User registered for an event!' });
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports = router; 
