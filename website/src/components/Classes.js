import {Component} from "react"

class Classes extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        const cs50 = <a href="https://www.cs.dartmouth.edu/~cs50/" target="_blank">CS 50</a>;
        const math22 = <a href="https://math.dartmouth.edu/~m22s21/info.html" target="_blank">Math 22</a>;
        const germ14 = <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/German-Studies/GERM-German-Studies/GERM-14" target="_blank">Into the Woods</a>;
        this.classes = [cs50, math22, germ14];
        this.btnTxt = ["Next class", "Repeat"];
    }


   nextClass = () => {
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
                <h1>Here are the classes I'm taking this term</h1>
                <h3> {this.classes[this.state.idx]}</h3>
                <button className="button1" onClick={this.nextClass}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default Classes;