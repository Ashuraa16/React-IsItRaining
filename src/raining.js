import React from "react";
class Raining extends React.Component{
    constructor(){
        super();
        this.state={
          raining:1
        }
      }
      changeRain=()=>{
        console.log('test',this.state.raining);
        // Use setState instead of modifying the state directly
        this.setState({ raining: !this.state.raining });
      }
      render(){
        return(
            <div>
                <h1 onMouseOver={this.changeRain} onMouseOut={this.changeRain}>Is it Raining today?{this.state.raining==false?'Yes':'No'}</h1>
            </div>
        );

      }
}
export default Raining;