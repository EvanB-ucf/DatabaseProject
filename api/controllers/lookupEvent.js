const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
	console.log(req.body);

	try {
		var searchBy = [];
		var values = [];
		var relations = [];
		var useQuotes = [];

		if (req.body.hasOwnProperty('city')) {
			searchBy.push('LOCATION.city');
			values.push(req.body.city);
			relations.push('=');
			useQuotes.push(true);
		}
		if (req.body.hasOwnProperty('start_before')) {
			searchBy.push('EVENTS.start_date');
			values.push("STR_TO_DATE(\'" + req.body.start_before + "\', \'%Y-%m-%d\')");
			relations.push('<');
			useQuotes.push(false);
		}
		if (req.body.hasOwnProperty('start_after')) {
			searchBy.push('EVENTS.start_date');
			values.push("STR_TO_DATE(\'" + req.body.start_after + "\', \'%Y-%m-%d\')");
			relations.push('>');
			useQuotes.push(false);
		}
		if (req.body.hasOwnProperty('start_on')) {
			searchBy.push('EVENTS.start_date');
			values.push("STR_TO_DATE(\'" + req.body.start_on + "\', \'%Y-%m-%d\')");
			relations.push('=');
			useQuotes.push(false);
		}
		if (req.body.hasOwnProperty('end_before')) {
			searchBy.push('EVENTS.start_date');
			values.push("STR_TO_DATE(\'" + req.body.end_before + "\', \'%Y-%m-%d\')");
			relations.push('<');
			useQuotes.push(false);
		}
		if (req.body.hasOwnProperty('end_after')) {
			searchBy.push('EVENTS.start_date');
			values.push("STR_TO_DATE(\'" + req.body.end_after + "\', \'%Y-%m-%d\')");
			relations.push('>');
			useQuotes.push(false);
		}
		if (req.body.hasOwnProperty('end_on')) {
			searchBy.push('EVENTS.end_date');
			values.push("STR_TO_DATE(\'" + req.body.end_on + "\', \'%Y-%m-%d\')");
			relations.push('=');
			useQuotes.push(false);
		}

		res.status(200).send(await mysql.findEvent(searchBy, values, relations, useQuotes));
	}
	catch (e) {
		console.log(e);
        res.status(500).send({ message: e.message });
	}
})

module.exports = router;