var db = require('../database'); // reference to server

//-------------//
// USERS START //
//-------------//

/** 
 * @function createUser
 * @param {string} username Username of new User
 * @param {string} password Password of new User
 * @description Adds a new User to the table USERS
*/
module.exports.createUser = async function createUser(username, password) {
  var sql = "INSERT INTO USERS (username, password) VALUES (\'" + username + "\',\'" + password + "\')";
  console.log("sql command is trying to create a user");
  return customSQL(sql);
}

/** 
 * @function findUser
 * @param {string} username Username of the desired User
 * @returns {array} Array of usernames selected from table
 * @description Finds Users with the given username
*/
module.exports.findUser = async function findUser(username) {
  var sql = "SELECT username FROM USERS WHERE username=\'" + username + "\'";
  console.log("sql command is trying to find usernames with " + username + " as their username");
  return customSQL(sql);
}

/** 
 * @function findUserIDFromUserName
 * @param {string} username Username of the desired User
 * @returns {array} Array of usernames selected from table
 * @description Finds Users with the given username
*/
module.exports.findUserIDFromUserName = async function findUserIDFromUserName(username) {
  var sql = "SELECT idUSERS FROM USERS WHERE username=\'" + username + "\'";
  console.log("sql command is trying to find userID with " + username + " as their username");
  return customSQL(sql);
}


/** 
 * @function login
 * @param {string} username Username of User
 * @param {string} password Password of User
 * @returns {boolean} Returns TRUE if the username and password match one in the database, else it returns FALSE
 * @description Checks if a user can log in with the given credentials
*/
module.exports.loginUser = async function loginUser(username, password) {
  console.log("sql command is trying to verify the user's credentials");
  var sql = "SELECT username FROM USERS WHERE username=\'" + username + "\' AND password=\'" + password + "\'"

  const result = await customSQL(sql);
  if (username == result[0].username) {
    console.log("User's credentials are valid");
    return true;
  }
  console.log("User's credentials are invalid");
  return false;
}

//------------//
// USERS STOP //
//------------//

//-------------------//
// SUPER ADMIN START //
//-------------------//

/** 
 * @function createSuperAdmin
 * @param {string} username Username of new Super Admin
 * @param {string} password Password of new Super Admin
 * @description Adds a new Super Admin to the table SUPERADMINS
*/
module.exports.createSuperAdmin = function createSuperAdmin(username, password) {
  var sql = "INSERT INTO SUPERADMIN (username, password) VALUES (\'" + username + "\',\'" + password + "\')";

  console.log("sql command is trying to create a super admin");
  return customSQL(sql);
}

/** 
 * @function findSuperAdmin
 * @param {string} username Username of the desired Super Admin
 * @returns {array} Array of rows selected from table
 * @description Finds Super Admins with the given username
*/
module.exports.findSuperAdmin = async function findSuperAdmin(username) {
  var sql = "SELECT * FROM SUPERADMIN WHERE username=\'" + username + "\'";

  console.log("sql command is trying to find super admins with " + username + " as their username");
  return customSQL(sql);
}

module.exports.loginSuperAdmin = async function loginSuperAdmin(username, password) {
  console.log("sql command is trying to verify the superAdmins's credentials");
  var sql = "SELECT username FROM SUPERADMIN WHERE username=\'" + username + "\' AND PASSWORD=\'" + password + "\'"

  const result = await customSQL(sql);
  if (username == result[0].username) {
    console.log("Super admin's credentials are valid");
    return true;
  }
  console.log("Super admin's credentials are invalid");
  return false;
}

//------------------//
// SUPER ADMIN STOP //
//------------------//

//----------------//
// LOCATION START //
//----------------//

/** 
 * @function createLocation
 * @param {string} city Location's city
 * @param {string} street_address Location's street_address
 * @param {string} state Location's state
 * @description Adds a new Location to the table LOCATION
*/
module.exports.createLocation = function createLocation(street_address, city, state) {
  var sql = "INSERT INTO LOCATION (street_address, city, state) VALUES (\'" + street_address + "\',\'" + city + "\',\'" + state + "\')";
  console.log("sql command is trying to create a location");
  return customSQL(sql);
}

/**
 * @function findLocation
 * @param {array} searchBy List of parameters to search by. For example: ["state","city"]
 * @param {array} values List of values which corresponds with the list of parameters in searchBy. For example: searhBy = ["state","city"], so values = ["florida","jacksonville"]
 * @returns Array of rows of Locations which contains all fields which are equivalent to those defined by searchBy and values.
 * @description This function allows you to search the LOCATION table with a variety of filters. For example, if you wanted to find a Location where the state is Texas and the city is Dallas, then searchBy = ["state","city"] and values = ["texas","dallas"]
 */
module.exports.findLocation = function findLocation(searchBy, values) {
  var sql = "SELECT * FROM LOCATION WHERE \'";

  for (var i = 0; i < searchBy.length - 1; i++) {
    sql += searchBy[0] + "\'=\'" + values[0] + "\' AND "
  }
  sql += searchBy[0] + "\'=\'" + values[0] + "\'";

  console.log("sql command is trying to find locations with special filters");
  return customSQL(sql)
}

/** 
 * @function findLocationByState
 * @param {string} state State of the desired Location
 * @returns {array} Array of rows selected from table
 * @description Finds Locations with the given state
*/
module.exports.findLocationByState = function findLocationByState(state) {
  var sql = "SELECT * FROM LOCATION WHERE state=\'" + state + "\'";

  console.log("sql command is trying to find locations with " + state + " as its state");
  return customSQL(sql);
}


/** 
 * @function findLocationByCity
 * @param {string} city City of the desired Location
 * @returns {array} Array of rows selected from table
 * @description Finds Locations with the given city
*/
module.exports.findLocationByCity = function findLocationByCity(city) {
  var sql = "SELECT * FROM LOCATION WHERE city=\'" + city + "\'";

  console.log("sql command is trying to find locations with " + city + " as its city");
  return customSQL(sql);
}


/** 
 * @function findLocationByStreet
 * @param {string} street_address Street address of the desired Location
 * @returns {array} Array of rows selected from table
 * @description Finds Locations with the given street address
*/
module.exports.findLocationByStreet = function findLocationByStreet(street_address) {
  var sql = "SELECT * FROM LOCATION WHERE street_address=\'" + street_address + "\'";
  console.log("sql command is trying to find locations with " + street_address + " as its street_address");
  return customSQL(sql);
}


/** 
 * @function findLocationByCity
 * @param {string} city City of the desired Location
 * @returns {array} Array of rows selected from table
 * @description Finds Locations with the given city
*/
module.exports.findLocationID = function findLocationID(street_address, city, state) {
  var sql = "SELECT idLocation FROM LOCATION WHERE city=\'" + city + "\' AND state=\'" + state + "\' AND street_address=\'" + street_address + "\'";
  console.log("SQL is trying to find the location ID of the street, city, state listed!");
  return customSQL(sql);
}
//---------------//
// LOCATION STOP //
//---------------//


//--------------//
// EVENTS START //
//--------------//

/**
 * @function createEvent
 * @param {number} adminID Id of the Admin in charge of the Event
 * @param {number} locationID Id of the Location of the Event
 * @param {string} name Name of the Event
 * @param {string} category Category of the Event
 * @param {string} description Description of the Event
 * @param {string} url Event's url
 * @param {number} start_date Event's start date
 * @param {number} end_date Event's end date
 * @description Creates a new Event in the Events Table
 */

module.exports.createEvent = async function createEvent(adminID, locationID, name, category, description, url, start_date, end_date) {
  var sql = "INSERT INTO EVENTS (adminID, locationID, name, category, description, url, start_date, end_date) VALUES (\'" + adminID + "\',\'" + locationID + "\',\'" + name + "\',\'" + category + "\',\'" + description + "\',\'" + url + "\',\'" + start_date + "\',\'" + end_date + "\')";
  console.log("sql command is trying to create an event");
  return customSQL(sql);
}

/**
 * @function getEventID
 * @param {number} adminID Id of the Admin in charge of the Event
 * @param {number} locationID Id of the Location of the Event
 * @param {string} name Name of the Event
 * @param {string} category Category of the Event
 * @param {number} start_date Event's start date
 * @param {number} end_date Event's end date
 * @returns Array of rows of Events which contains all fields which are equivalent to those defined by searchBy and values.
 * @description This function allows you to search the EVENTS table with a variety of filters. For example, if you wanted to find a Event where the name is party and the start_date is 01/07/20, then searchBy = ["name","start_date"] and values = ["party",01072020]
 */
module.exports.getEventID = async function getEventID(adminID, locationID, name, category, start_date, end_date) {
  var sql = "SELECT idEVENTS FROM EVENTS where adminID= \'" + adminID + "\' AND locationID=\'" + locationID + "\' AND name=\'" + name + "\' AND category=\'" + category + "\' AND start_date=\'" + start_date + "\' AND end_date=\'" + end_date + "\'";
  console.log("sql is looking for the eventID");
  return customSQL(sql);
}

module.exports.updateEventURL = async function updateEventURL(eventID, newURL) {
  var sql = "UPDATE EVENTS SET url=\'" + newURL + "\' WHERE idEVENTS= \'" + eventID;
  console.log("sql is updating event url");
  return customSQL(sql);
}


/**
 * @function findEvent
 * @param {array} searchBy List of parameters to search by. For example: ["adminID","name","category"]
 * @param {array} values List of values which corresponds with the list of parameters in searchBy. For example: searhBy = ["adminID","name","category"], so values = [123,"any_name","some_category"]
 * @returns Array of rows of Events which contains all fields which are equivalent to those defined by searchBy and values.
 * @description This function allows you to search the EVENTS table with a variety of filters. For example, if you wanted to find a Event where the name is party and the start_date is 01/07/20, then searchBy = ["name","start_date"] and values = ["party",01072020]
 */
module.exports.findEvent = function findEvent(searchBy, values) {
  var sql = "SELECT * FROM EVENTS WHERE \'";

  for (var i = 0; i < searchBy.length - 1; i++) {
    sql += searchBy[0] + "\'=\'" + values[0] + "\' AND "
  }
  sql += searchBy[0] + "\'=\'" + values[0] + "\'";

  console.log("sql command is trying to find events with special filters");
  return customSQL(sql)
}

/** 
 * @function findEventByName
 * @param {string} name Name of the Event
 * @returns {array} Array of rows selected from table
 * @description Finds Events with the given name
*/
module.exports.findEventByName = function findEventByName(name) {
  var sql = "SELECT * FROM EVENTS WHERE name=\'" + name + "\'";

  console.log("sql command is trying to find events with " + name + " as its name");
  return customSQL(sql);
}

/** 
 * @function findEventByCategory
 * @param {string} category Category of the Event
 * @returns {array} Array of rows selected from table
 * @description Finds Events with the given category
*/
module.exports.findEventByCategory = function findEventByCategory(category) {
  var sql = "SELECT * FROM EVENTS WHERE category=\'" + category + "\'";

  console.log("sql command is trying to find events with " + category + " as its category");
  return customSQL(sql);
}

/** 
 * @function findEventByStartDate
 * @param {string} start_date Start date of the Event
 * @returns {array} Array of rows selected from table
 * @description Finds Events with the given start date
*/
module.exports.findEventByStartDate = function findEventByStartDate(start_date) {
  var sql = "SELECT * FROM EVENTS WHERE start_date=\'" + start_date + "\'";

  console.log("sql command is trying to find events with " + start_date + " as its start_date");
  return customSQL(sql);
}

/** 
 * @function findEventByEndDate
 * @param {string} end_date name of the Event
 * @returns {array} Array of rows selected from table
 * @description Finds Events with the given end_date
*/
module.exports.findEventByEndDate = function findEventByEndDate(end_date) {
  var sql = "SELECT * FROM EVENTS WHERE end_date=\'" + end_date + "\'";
  console.log("sql command is trying to find events with " + end_date + " as its end_date");
  return customSQL(sql);
}

/**
 * @function allEvents
 * @returns Returns all Events in the EVENTS table
 * @description Selects all Events from Events
 */
module.exports.allEvents = function allEvents() {
  var sql = "SELECT * FROM EVENTS"
  console.log("sql command is trying to retrieve all event data");
  return customSQL(sql);
}

/**
 * @function locationOfEvent
 * @param {number} idLocation Id of the location as given in the Event data
 * @returns {array} Array of Locations where the Event is being held
 * @description Gets the details of the location where the Event is being held
 */
module.exports.locationOfEvent = function locationOfEvent(idLocation) {
  var sql = "SELECT * FROM LOCATION INNER JOIN EVENTS ON LOCATION.idLocation=EVENTS.locationID WHERE idLocation=\'" + idLocation + "\'"

  console.log("sql command is trying to retrieve the location information for this event");
  return customSQL(sql);
}

/**
 * @function adminOfEvent
 * @param {number} idLocation Id of the admin as given in the Event data
 * @returns {array} Array of admins that are in charge of the Event
 * @description Gets the username of the admin in charge of the Event 
 */
module.exports.adminOfEvent = function adminOfEvent(idUSERS) {
  var sql = "SELECT username FROM USERS INNER JOIN EVENTS ON USERS.idUSERS=EVENTS.adminID WHERE idUSERS=\'" + idUSERS + "\'"
  console.log("sql command is trying to retrieve the admin username for this event");
  return customSQL(sql);
}

//-------------//
// EVENTS STOP //
//-------------//

//------------------------//
// REGISTERED EVENT START //
//------------------------//

/**
 * @function createRegisteredEvent
 * @param {number} idUser Id of User who registered for the Event
 * @param {number} idEvent Id of Event the User registerd for
 * @description Creates a User Registered Event
 */
module.exports.createRegisteredEvent = function createRegisteredEvent(idUser, idEvent) {
  var sql = "INSERT INTO USER_REGISTERED_EVENTS (idUser, idEvent) VALUES (\'" + idUser + "\',\'" + idEvent + "\')";
  console.log("sql command is trying to create a registered event");
  return customSQL(sql);
}

/**
 * @function findRegisteredEvent
 * @param {number} username Username of user we are interested in
 * @returns Array of Events registered for by the the given user
 * @description Takes the username of a user and uses that to find all events in which the user has registerd in and returns that information as an array
 */
module.exports.findRegisteredEventForUser = function findRegisteredEventForUser(username) {
  var sql = "SELECT * FROM EVENTS INNER JOIN USER_REGISTERED_EVENT ON EVENTS.idEVENTS=USER_REGISTERED_EVENT.idEvent WHERE USER_REGISTERED_EVENT.idUser=(SELECT idUSERS FROM USERS WHERE username=\'" + username + "\')";
  console.log("sql command is trying to retrieve registered events for user: " + username);
  return customSQL(sql);
}

//-----------------------//
// REGISTERED EVENT STOP //
//-----------------------//

module.exports.exportedCustomSQL = async function exportedCustomSQL(sql) {
  return customSQL(sql);
}

/** 
 * @function customSQL
 * @param {string} sql Line of sql you wish to run
 * @returns {array} Array of rows pulled from sql command, if any
 * @description Runs any custom line of sql against the database
*/

customSQL = (sql) => {
  console.log("customSQL: " + sql);
  return new Promise((resolve, reject) => {
    db.connection.query(sql, (err, results, fields) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

// async function customSQL(sql) {
//   console.log(sql);
//   var result = undefined;

//   await db.connection.query(sql, function (err, rows, fields) {
//     if (err) throw err;
//     console.log(rows);
//     if (rows == null) return null;
//     result = rows;
//     return rows;
//   });

//   console.log(result);
//   return result;
// }

// module.export = { customSQL };