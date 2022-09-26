const {createPool} = require("mysql");

module.exports = createPool({
    port : 3306,
    host : "localhost",
    user : "root",
    password : "root",
    database : "test",
    connectionlimit : 10
})