const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const username = req.body.username;
        const password = req.body.password;

        // if (await mysql.findUser(username).values) {
        //     res.status(409).send({ message: 'Username does not exist!' });
        //     return;
        // }

        if (await mysql.login(username, password)) {
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
