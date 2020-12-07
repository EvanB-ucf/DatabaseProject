const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const searchedUserQueryType = req.body.searchedUserQueryType;
        const usernameSearch = req.body.usernameSearch;
        const loggedInUser = req.body.loggedInUser;

        console.log(searchedUserQueryType);
        console.log(usernameSearch);
        console.log(loggedInUser);

        var userID = await mysql.findUserIDFromUserName(usernameSearch);
        userID = userID[0].idUSERS;
        console.log(userID);

        var searchUserSQLQuery = '';
        if (searchedUserQueryType === 'registered') {
            searchUserSQLQuery = "SELECT * FROM EVENTS AS e, USER_REGISTERED_EVENTS AS r WHERE e.idEVENTS = r.idEvent AND r.idUser=\'" + userID + "\'";
        }
        if (searchedUserQueryType === 'organized') {
            searchUserSQLQuery = "SELECT * FROM EVENTS WHERE adminID=\'" + userID + "\'";
        }

        const queryResults = await mysql.exportedCustomSQL(searchUserSQLQuery);

        console.log(queryResults);
        const events = [];

        queryResults.forEach(event => {
            const eventAsJSON = {
                idEVENTS: event.idEVENTS,
                name: event.name,
                category: event.category,
                description: event.description,
                url: event.url,
                start_date: event.start_date,
                end_date: event.end_date,
            }
            events.push(eventAsJSON);
        });

        res.status(201).send({ message: 'Searched by username!', events });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports = router; 
