var mongoose = require("mongoose");
var Bet = require("../data/bet");
var _ = require("underscore");

var router = require("express").Router();
router.route("/bets/:id?").get(getBets).post(addBet).delete(deleteBet);

function getBets(req, res) {
    Bet.find(function (err, bets) {
        if (err)
            res.send(err);
        else
            res.json(bets);
    });
}

function addBet(req, res) {
    var bet = new Bet(_.extend({}, req.body));
    bet.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(bet);
    });
}

function deleteBet(req, res) {
    var id = req.params.id;
    Bet.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;