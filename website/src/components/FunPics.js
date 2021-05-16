import {Component} from "react"
import pepper from "../photos/pepper.png";
import tennisPic from "../photos/tennis.JPG";
import outdoorPic from "../photos/outdoor.JPG";

class FunPics extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        //const dartmouth = <figure><img src={pic} alt="Hi!" className="photo"/></figure>;
        const dog =  <div class="img_wrap">
            <img src={pepper} alt="Pepper" className="photo"/>
            <div className="project_description">
                <p></p>
                <p> This is my dog Pepper! She can be quite stubborn sometimes </p>
            </div>
            </div>
        const hiking = <div class="img_wrap">
        <img src={outdoorPic} alt="Hike" className="photo"/>
        <div className="project_description">
            <p></p>
            <p> I love exploring the outdoors! This is when I went snowshoeing in Utah! </p>
        </div>
        </div>
        const tennis = <div class="img_wrap">
        <img src={tennisPic} alt="Tennis" className="photo"/>
        <div className="project_description">
            <p></p>
            <p> I play tennis and am looking for hitting buddies! :) </p>
        </div>
        </div>
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
                <p></p>
                <h3> {this.pics[this.state.idx]}</h3>
                <p></p>
                <button className="button" onClick={this.nextPic}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default FunPics;