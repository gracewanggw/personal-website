import {Component} from "react"
import pepper from "../photos/pepper.png";
import tennisPic from "../photos/tennis.JPG";
import hikePic from "../photos/hiking.JPG";

class FunPics extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        //const dartmouth = <figure><img src={pic} alt="Hi!" className="photo"/></figure>;
        const dog = <figure>
            <img src={pepper} alt="Hi!" className="photo"/>
            <figcaption>This is my dog! Her name is Pepper and she can be a bit stubborn</figcaption>
            </figure>;
        const hiking = <figure>
            <img src={hikePic} alt="Hi!" className="photo"/>
            <figcaption>I love exploring the outdoors! This is at Velvet Rocks</figcaption>
            </figure>;
        const tennis = <figure>
            <img src={tennisPic} alt="Hi!" className="photo"/>
            <figcaption> I play tennis and am looking for hitting buddies! :)</figcaption>
            </figure>;
        this.pics = [dog, hiking, tennis];
        this.btnTxt = ["Next", "Repeat"];
    }


   nextPic = () => {
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
            <div> 
                <h2>Photos: </h2>
                <h3> {this.pics[this.state.idx]}</h3>
                <button className="button" onClick={this.nextPic}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default FunPics;