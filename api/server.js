var mysql = require('mysql');

// Set up express 
const express = require('express');
const app = express();
const appPort = 3001; // React typically runs on 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Include routes 
app.use(require('./controllers'));

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

module.export = { connection }

app.listen(appPort);
console.log(`server started on port ${appPort}`); 