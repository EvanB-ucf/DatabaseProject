const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
	console.log(req.body);

	try {
		var adminID;
		if (req.body.hasOwnProperty('adminID')) {
			adminID = req.body.adminID;
		}
		else {
			adminID = mysql.findUserIDFromUserName(req.body.username);
		}

		res.status(200).send(await mysql.findActiveEventByAdmin(adminID));
	}
	catch (e) {
		console.log(e);
        res.status(500).send({ message: e.message });
	}
})

module.exports = router;