var db = require("../server") // reference to server


//-------------//
// USERS START //
//-------------//

/** 
 * @function createUser
 * @param {string} username Username of new user
 * @param {string} password Password of new user
 * @description Adds a new User to the table USERS
*/
export function createUser(username, password) {
  var sql = "INSERT INTO USERS (username, password) VALUES (\'"+username+"\',\'"+password+"\')";
    
  return customSQL(sql);
}

/** 
 * @function findUser
 * @param {string} username Username of the desired User
 * @returns {array} Array of rows selected from table
 * @description Finds Users with the given username
*/
export function findUser(username) {
  var sql = "SELECT * FROM USERS WHERE username=\'"+username+"\'";
    
  return customSQL(sql);
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
export function createSuperAdmin(username, password) { 
  var sql = "INSERT INTO SUPERADMIN (username, password) VALUES (\'"+username+"\',\'"+password+"\')";
    
  return customSQL(sql);
}

/** 
 * @function findSuperAdmin
 * @param {string} username Username of the desired Super Admin
 * @returns {array} Array of rows selected from table
 * @description Finds Super Admins with the given username
*/
export function findSuperAdmin(username) {
  var sql = "SELECT * FROM SUPERADMIN WHERE username=\'"+username+"\'";
    
  return customSQL(sql);
}

//------------------//
// SUPER ADMIN STOP //
//------------------//


/** 
 * @function customSQL
 * @param {string} sql Line of sql you wish to run
 * @returns {array} Array of rows pulled from sql command, if any
 * @description Runs any custom line of sql against the database
*/
export function customSQL(sql) {
    db.connection.connect() //connects us to database
    
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('sql statement succefully executed')  
      })
    
    db.connection.end() // ends connection
    
    if (rows == NULL) return -1;
    
    return rows;
}

db.connection.request