const services = require("./services/services")
const db = require("./server")
var username = 'testusrnm'
var password = 'testpswd'

var i
// // testing createUser function
// for(i = 0;i < 10; i++)
//     services.createUser(username + i, password + i)


// test login function
for(i = 0; i<11; i++){
    (async () => {
        var test = await services.login(username+i, password+i)
        if(test)
            console.log("login attempt successful, UserID: " + test)
    })()
}
db.connection.end() // ends connection
console.log("db connection ended")