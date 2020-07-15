// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableName, cols, vals, cb) {
        var queryString = "";

        // Need mre stuff here!!!!!!!!!

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function(tableName, objColVals, condition, cb) {
        var queryString = "";

        // MORE STUFF HERE!!!!!!!!

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }   
};

module.exports = orm;