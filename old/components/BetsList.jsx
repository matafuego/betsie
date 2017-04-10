var React = require("react");
var BetInfo = require("./BetInfo.jsx")
var AddBet = require("./AddBet.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddBet />
                </div>
                <div className="col-md-6">
                    {
                        this.props.bets.map(function(s,index){
                            return(
                                <BetInfo info={s} key={"bet"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});