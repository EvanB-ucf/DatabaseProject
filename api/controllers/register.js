const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const username = req.body.username;
        const password = req.body.password;


        // Verify the username is unique
        const superAdminQuery = await mysql.findSuperAdmin(username);
        const userQuery = await mysql.findUser(username);

        if (superAdminQuery.length > 0 || userQuery.length > 0) {
            res.status(409).send({ message: 'Username already exists!' });
            return;
        }

        // If unique, we shall create and save the username! 
        await mysql.createUser(username, password);
        res.status(201).send({ message: 'User created!' });

    } catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }

});

module.exports = router; 
