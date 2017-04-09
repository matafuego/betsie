var React = require("react");
var ReactDOM = require("react-dom");
var BetsList = require("./components/BetsList.jsx");
var betsStore = require("./stores/betStore");

var _bets = [];

var getBetsCallback = function(bets){
    _bets = bets;
    render();
};
betsStore.onChange(getBetsCallback);

function render(){
    ReactDOM.render(<BetsList bets={_bets} />, document.getElementById("container"));    
}

render();
