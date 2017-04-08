var dispatcher = require("../dispatcher");

module.exports = {
    addBet:function(bet){
        dispatcher.dispatch({
           bet:bet,
           type:"bet:addBet" 
        });
    },
    deleteBet:function(bet){
        dispatcher.dispatch({
           bet:bet,
           type:"bet:deleteBet" 
        });
    }
}