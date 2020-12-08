const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const username = req.body.username;
        const password = req.body.password;
        var isSuperAdmin = false;

        // Check if the username is a superAdmin: 
        const superAdminQuery = await mysql.findSuperAdmin(username);
        if (superAdminQuery.length > 0) {
            isSuperAdmin = true;

            // If it is, log them in with valid password
            if (await mysql.loginSuperAdmin(username, password)) {
                res.status(200).send({ success: true, message: 'SuperAdmin login successful!', isSuperAdmin });
                return;
            } else {
                res.status(401).send({ message: 'Invalid username and/or password for superAdmin.' });
                return;
            }
        }

        // Then check if they are a user and give them an error if the username they input just doesn't exist 
        const userQuery = await mysql.findUser(username);
        if (userQuery.length === 0) {
            res.status(409).send({ message: 'Username does not exist!' });
            return;
        }

        // Try to log them in!
        if (await mysql.loginUser(username, password)) {
            res.status(200).send({ success: true, message: 'User login successful!', isSuperAdmin });
            return;
        } else {
            res.status(401).send({ message: 'User has invalid username and/or password.' });
            return;
        }

    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 409) {
            alert("Username already exists!");
        }
        else {
            res.status(500).send({ message: e.message, });
        }
    }
});

module.exports = router;
