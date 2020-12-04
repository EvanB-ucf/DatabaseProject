var mysql = require('mysql')
const express = require('express')
const port = 5000;
var cors = require("cors")
const app = express()
var connection = mysql.createConnection({
  host: 'databaseprojectcop4710.c3vnxknml348.us-east-1.rds.amazonaws.com',
  user: 'COP4710_Group3',
  password: 'garbageTier56',
  database: 'Main',
  port: 3306
})
module.export = {connection}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! (from the node.js server)');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});