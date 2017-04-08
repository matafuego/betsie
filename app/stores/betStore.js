var dispatcher = require("../dispatcher");

function BetStore() {
    var listeners = [];
    var bets = [{ name: "Jaguares-Sharks", tagline:"una apuesta perdida" }, 
                    { name: "Jaguares-Lions",tagline:"¿una apuesta futura?" }, 
                    { name: "Jaguares-Sunwolves", tagline:"una apuesta japonesa" }];

    function getBets() {
        return bets;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addBet(bet) {
        bets.push(bet)
        triggerListeners();
    }

    function deleteBet(bet) {
        var _index;
        bets.map(function (s, index) {
            if (s.name === bet.name) {
                _index = index;
            }
        });
        bets.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(bets);
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