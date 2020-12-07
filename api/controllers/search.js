const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const eventStart = req.body.eventStart;
        const eventEnd = req.body.eventEnd;
        const eventCity = req.body.eventCity;
        const loggedInUser = req.body.loggedInUser;

        // All locationIDs - check the location table, collect all the IDs

        console.log(eventStart);
        console.log(eventEnd);
        const findLocationsSQL = "SELECT * FROM EVENTS AS e, LOCATION AS l WHERE l.idLocation = e.locationID AND e.start_date>=\'" + eventStart + "\' AND e.end_date<=\'" + eventEnd + "\' AND l.city=\'" + eventCity + "\'";
        const locations = await mysql.exportedCustomSQL(findLocationsSQL);

        console.log(locations);
        const events = [];

        locations.forEach(location => {
            const eventAsJSON = {
                idEVENTS: location.idEVENTS,
                idLocation: location.idLocation,
                name: location.name,
                category: location.category,
                description: location.description,
                url: location.url,
                start_date: location.start_date,
                end_date: location.end_date,
                street_address: location.street_address,
                city: location.city,
                state: location.state,
                adminID: location.adminID,
            }
            events.push(eventAsJSON);
        });

        res.status(201).send({ message: 'Searched by city and dates!', events });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports = router; 
