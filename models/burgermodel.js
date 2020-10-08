var orm = require("../config/orm.js")

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result)
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (result) {
            cb(result)
        })
    },

    updateOne: function (vals, condition, cb) {
        orm.updateOne("burgers", vals, condition, function (result) {
            cb(result)
        });
    }
}

module.exports = burger