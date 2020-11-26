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
    db.connection.connect() //connects us to database
    
    var sql = "INSERT INTO USERS (username, password) VALUES (\'"+username+"\',\'"+password+"\')";
    
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('added user successfully')
      })
    
    db.connection.end() // ends connection
}

/** 
 * @function findUser
 * @param {string} username Username of the desired User
 * @returns {array} Array of rows selected from table
 * @description Finds Users with the given username
*/
export function findUser(username) {
    db.connection.connect() //connects us to database
    
    var sql = "SELECT * FROM USERS WHERE username=\'"+username+"\'";
    
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('Succesfully grabbed user '+rows[0].username)  
      })
    
    db.connection.end() // ends connection
    
    if (rows == NULL) return -1;
    
    return rows;
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
    db.connection.connect() //connects us to database
    
    var sql = "INSERT INTO SUPERADMIN (username, password) VALUES (\'"+username+"\',\'"+password+"\')";
    
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('added super admin successfully')
      })
    
    db.connection.end() // ends connection
}

/** 
 * @function findSuperAdmin
 * @param {string} username Username of the desired Super Admin
 * @returns {array} Array of rows selected from table
 * @description Finds Super Admins with the given username
*/
export function findSuperAdmin(username) {
    db.connection.connect() //connects us to database
    
    var sql = "SELECT * FROM SUPERADMIN WHERE username=\'"+username+"\'";
    
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        console.log('Succesfully grabbed Super Admin '+rows[0].username)  
      })
    
    db.connection.end() // ends connection
    
    return rows;
}

//------------------//
// SUPER ADMIN STOP //
//------------------//


/** Executes custom sql request 
 *  Returns -1 if rows = NULL
 *  Returns rows if rows != NULL
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