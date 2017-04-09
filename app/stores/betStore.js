var dispatcher = require("../dispatcher");
var betService = require("../services/betService");

function BetStore() {
    var listeners = [];

    function onChange(listener) {
        getBets(listener);
        listeners.push(listener);
    }

    function getBets(cb) {
        betService.getBets().then(function (res) {
            cb(res);
        });
    }

    function addBet(bet) {
        betService.addBet(bet).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteBet(bet) {
        betService.deleteBet(bet).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getBets(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "bet") {
            switch (split[1]) {
                case "addBet":
                    addBet(payload.bet);
                    break;
                case "deleteBet":
                    deleteBet(payload.bet);
                    break;
            }
        }
    });

    return {
        getBets: getBets,
        onChange: onChange
    }
}

module.exports = BetStore();