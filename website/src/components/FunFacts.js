import {Component} from "react"

class FunFacts extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        this.funFacts = ["I LOVE food", "Currently learning to play the ukulele",
        "Had to be sledded down by ski patrol the last time I went skiing"];
        this.btnTxt = ["Next fact", "Repeat"];
    }


   nextFact = () => {
       var temp = this.state.idx
       var newIdx = (temp+1)%3;
       this.setState({idx: newIdx});
       if(this.state.idx === 1){
           this.setState({end: 1});
       }
       else{
           this.setState({end:0});
       }
   }

   render(){
    return(
        <div>
            <div className="heading"> 
                <h1>Here are a few fun facts about me</h1>
                <h3> {this.funFacts[this.state.idx]}</h3>
                <button className="button1" onClick={this.nextFact}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default FunFacts;