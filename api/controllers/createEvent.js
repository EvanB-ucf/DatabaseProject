const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
	console.log(req.body);

	try {
		const adminID = req.body.adminID;
		const locationID = req.body.locationID;
		const name = req.body.name;
		const category = req.body.category;
		const description = req.body.description;
		const url = req.body.url;
		const start_date = req.body.start_date;
		const end_date = req.body.end_date;

		await mysql.createEvent(adminID, locationID, name, category, description, url, start_date, end_date)

		res.status(200).send({ message: 'Event created!' });
	}
	catch (e) {
		console.log(e);
        res.status(500).send({ message: e.message });
	}
})

module.exports = router;