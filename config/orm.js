var connection = require("../config/connection.js");

function passQuestionMarks(num) {
    var qmArray = [];

    for (var i = 0; i < num; i++) {

        qmArray.push("?")
    };

    return qmArray.toString()
};

function objToSql(obj) {
    var kvPairArr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            kvPairArr.push(key + "=" + value);
        }
    }

    return kvPairArr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName;

        connection.query(query, function (err, results) {
            if (err) throw err;

            cb(results)
        });
    },

    insertOne: function (tableName, cols, vals, cb) {
        var query = "INSERT INTO " + tableName + " (" + cols.toString() + ") VALUES (" + passQuestionMarks(vals.length) + ")";

        connection.query(query, vals, function (err, results) {
            if (err) throw err;

            cb(results)
        });
    },

    updateOne: function (tableName, vals, condition, cb) {
        var query = "UPDATE " + tableName + " SET " + objToSql(vals) + " WHERE " + condition;

        connection.query(query, function (err, results) {
            if (err) throw err;

            cb(results)
        });
    }
};

module.exports = orm;
