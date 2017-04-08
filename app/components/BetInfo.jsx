var React = require("react");
var actions = require("../actions/BetActions");

module.exports = React.createClass({
    deleteBet: function(e){
        e.preventDefault();
        actions.deleteBet(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteBet}>&times;</span>
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        )
    }
})