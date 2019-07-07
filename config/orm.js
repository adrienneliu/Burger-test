//import mysql connection 
var connection = require("../config/connection.js");


//object for sql statement functions
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(queryString);
        })
    }
}

module.exports = orm;