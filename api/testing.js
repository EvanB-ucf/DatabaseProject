const services = require("./services/services")
const db = require("./server")
var username = 'testusrnm'
var password = 'testpswd'

// testing createUser function
for(var i = 0;i < 10; i++)
    services.createUser(username + i, password + i)

db.connection.end() // ends connection
console.log("db connection ended")