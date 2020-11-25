var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'databaseprojectcop4710.c3vnxknml348.us-east-1.rds.amazonaws.com',
  user: 'COP4710_Group3',
  password: 'garbageTier56',
  port: 3306
})

connection.connect()

connection.query('SELECT 2 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()