const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    try {

        const username = req.body.username;
        const password = req.body.password;

        if (mysql.login(username, password)) {
            res.status(200).send({ success: true, message: 'Login successful!' });
            return;
        } else {
            res.status(401).send({ message: 'Invalid username and/or password.' });
        }

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});

module.exports = router;
