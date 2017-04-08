var React = require("react");
var actions = require("../actions/BetActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }  
    },
    addBet:function(e){
        e.preventDefault();
        actions.addBet(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addBet}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Bet:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Bet" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Description:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Description" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Bet</button>
                </div>
            </form>
        )
    }
})