const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        var locations
        if(req.body.eventCity != null){
            const eventCity = req.body.eventCity;
            const currentDay = req.body.currentDate;
            const loggedInUser = req.body.loggedInUser;

            console.log(eventCity);
            console.log(currentDay);
            const findLocationsSQL = "SELECT * FROM EVENTS e, LOCATION l WHERE e.locationID=l.idLocation AND e.start_date<=\'" + currentDay + "\' AND e.end_date>=\'" + currentDay + "\' AND l.city=\'" + eventCity + "\'"; 
            locations = await mysql.exportedCustomSQL(findLocationsSQL);
        }else{
            const eventStart = req.body.eventStart;
            const eventEnd = req.body.eventEnd;
            const loggedInUser = req.body.loggedInUser;

            console.log(eventStart);
            console.log(eventEnd);
            const findLocationsSQL = "SELECT * FROM EVENTS e WHERE e.start_date>=\'" + eventStart + "\' AND e.end_date<=\'" + eventEnd + "\' ";
            locations = await mysql.exportedCustomSQL(findLocationsSQL);
        }
        

        // All locationIDs - check the location table, collect all the IDs



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
