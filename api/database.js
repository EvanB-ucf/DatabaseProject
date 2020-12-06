var mysql = require('mysql');

// Create our sql connection: 
var connection = mysql.createConnection({
    host: 'databaseprojectcop4710.c3vnxknml348.us-east-1.rds.amazonaws.com',
    user: 'COP4710_Group3',
    password: 'garbageTier56',
    database: 'Main',
    port: 3306
});

// Include error notification if db doesn't connect
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected!");
    } else {
        console.log("Error connecting database :(");
    }
});

module.exports = { connection }