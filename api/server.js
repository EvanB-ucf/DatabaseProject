var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'databaseprojectcop4710.c3vnxknml348.us-east-1.rds.amazonaws.com',
  user: 'COP4710_Group3',
  password: 'garbageTier56',
  database: 'Main',
  port: 3306
})
module.export = { connection }
