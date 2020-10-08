var express = require("express");

var router = express.Router();

var burger = require("../models/burgermod.js");


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var bObject = {
            burgers: data
        };

        res.render("index", bObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", [req.body.name], function (result) {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({ devoured: true }, condition, function (result) {

        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;