const services = require("./services/services")
const db = require("./server")
var username = 'testusrnm'
var password = 'testpswd';

// var i
// // testing createUser function
// for(i = 0;i < 10; i++)
//     services.createUser(username + i, password + i)

// testing createLocation function
// services.createLocation('Orlando','test address','FL')
// services.createLocation('Jacksonville', 'test address2','FL')
// services.createLocation('Miami','test address3','FL')

// testing createSuperAdmin function
// services.createSuperAdmin('kolbe','kolbe')
// services.createSuperAdmin('andrew','andrew')
// services.createSuperAdmin('evan','evan')
// services.createSuperAdmin('melanie','melanie')
// services.createSuperAdmin('richard','richard')

// testing createEvent function
// services.createEvent(4,1,'event1','cat','desc','url','2020-12-1','2020-12-10')
// services.createEvent(4,1,'event2','cat','desc','url','2020-12-1','2020-12-10')
// services.createEvent(4,2,'event3','cat','desc','url','2020-12-1','2020-12-10')
// services.createEvent(4,1,'event4','cat','desc','url','2020-12-1','2020-12-10')
// services.createEvent(4,1,'event1','cat','desc','url','2020-12-7','2020-12-10')
// services.createEvent(4,1,'event1','cat','desc','url','2020-12-1','2020-12-4')

// testing createRegisteredEvent
// services.createRegisteredEvent(4,3)
// services.createRegisteredEvent(1,3)
// services.createRegisteredEvent(25,3)
// services.createRegisteredEvent(27,3)

// test login function
// for(i = 2; i<5; i++){
//     (async () => {
//         var test = await services.login(username+i, password+i)
//         if(test)
//             console.log("login attempt successful, UserID: " + test)
//     })()
// }

// test search functions

// test findEventByCityBetweenDates
// (async () => {
//     var text1 = await services.findEventByCityBetweenDates('Orlando','2020-12-5')
//     var text2 = await services.findEventByCityBetweenDates('Jacksonville','2020-12-5')
//     console.log(JSON.stringify(text1))
//     console.log(JSON.stringify(text2))

//     db.connection.end() // ends connection
//     console.log("db connection ended")
// })()

// test findEventByDateRange
// (async () => {
//     var text1 = await services.findEventByDateRange('2020-12-5','2020-12-5')
//     var text2 = await services.findEventByDateRange('2020-12-1','2020-12-10')
//     console.log(text1.length)
//     console.log(text2.length)
//     //console.log(JSON.stringify(text1))
//     //console.log(JSON.stringify(text2))

//     db.connection.end() // ends connection
//     console.log("db connection ended")
// })()

// test findEventByAdmin
// (async () => {
//     var text1 = await services.findEventByAdmin(username+1)
//     var text2 = await services.findEventByAdmin('wow')
//     console.log(text1.length)
//     console.log(text2.length)
//     //console.log(JSON.stringify(text1))
//     //console.log(JSON.stringify(text2))

//     db.connection.end() // ends connection
//     console.log("db connection ended")
// })()

// test findRegisteredEventForUser
(async () => {
        var text1 = await services.findRegisteredEventForUser(username + 1)
        var text2 = await services.findRegisteredEventForUser('test')
        console.log(text1.length)
        console.log(text2.length)
        //console.log(JSON.stringify(text1))
        //console.log(JSON.stringify(text2))
        db.connection.end() // ends connection
        console.log("db connection ended")
    })()
