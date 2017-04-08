var React = require("react");
var ReactDOM = require("react-dom");
var BetsList = require("./components/BetsList.jsx");
var betsStore = require("./stores/betStore");
var _bets = betsStore.getBets();
betsStore.onChange(function(bets){
    _bets = bets;
    render();
});

function render(){
    ReactDOM.render(<BetsList bets={_bets} />, document.getElementById("container"));    
}

render();
