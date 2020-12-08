const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const eventTitle = req.body.eventTitle;
        const eventDescription = req.body.eventDescription;
        const eventStart = req.body.eventStart;
        const eventEnd = req.body.eventEnd;
        const eventCategory = req.body.eventCategory;
        const eventStreet = req.body.eventStreet;
        const eventCity = req.body.eventCity;
        const eventState = req.body.eventState;
        const whoMadeEvent = req.body.username;
        const eventURL = req.body.eventURL;

        // Check if already existing location and grab it's location ID: 
        // Check location ID, if not a location, then add it
        var queryLocationID = await mysql.findLocationID(eventStreet, eventCity, eventState);
        var locationID = undefined;

        if (queryLocationID.length > 0) {
            locationID = queryLocationID[0].idLocation;
        } else {
            await mysql.createLocation(eventStreet, eventCity, eventState);
            console.log("New location added!");

            queryLocationID = await mysql.findLocationID(eventStreet, eventCity, eventState);
            locationID = queryLocationID[0].idLocation;
        }
        console.log("locationID: " + locationID);


        // Determine the admin ID
        var queryUserID = await mysql.findUserIDFromUserName(whoMadeEvent);
        var userID = undefined;

        if (queryUserID.length > 0) {
            userID = queryUserID[0].idUSERS;
        } else {
            res.status(404).send({ message: 'User trying to create the event is not found!' });
        }

        console.log("UserID: " + userID);
        await mysql.createEvent(userID, locationID, eventTitle, eventCategory, eventDescription, eventURL, eventStart, eventEnd);

        // Update URL
        // var queryEventID = await mysql.getEventID(userID, locationID, eventTitle, eventCategory, eventStart, eventEnd);
        // const eventID = queryEventID[0].idEVENTS;
        // const updatedURL = '?eventID=' + eventID;
        // await mysql.updateEventURL(eventID, updatedURL);

        res.status(201).send({ message: 'Event saved!' });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports = router; 
