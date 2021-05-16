import {Component} from "react"
import remMe from "../photos/rememberMe.png";
import tripP from "../photos/tripPacker.png";
import wispApp from "../photos/rideNow.png";
import gitLogo from "../photos/githubLogo.png";

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {idx: 0, end: 0};
        const rememberMe = <div class="project_wrap">
            <img src={remMe} alt="RememberMe" className="projectPhoto"/>
            <div className="project_description">
                <h1> RememberMe</h1>
                <p> RememberMe is an app that aims to help patients with Alzheimer's remember their friends and family. </p>
                <p></p>
                <h1> Tech Stack: </h1>
                <ul>
                    <li> SQLite Database</li>
                    <li> Java </li>
                    <li> Android Studio</li>
                </ul>
                <p></p>
                <a href="https://github.com/gracewanggw/RememberMe/" target="_blank" rel="noreferrer">
                    <img src={gitLogo} className="gitIcon" alt="GitHub"></img>
                </a>
            </div>
        </div>;
        const tripPacker = <div class="project_wrap">
            <img src={tripP} alt="TripPacker" className="projectPhoto"/>
            <div className="project_description">
                <h1> TripPacker</h1>
                <p> TripPacker is a web application that gives users a recommended list of items to pack based on the location and date the user is travelling. </p>
                <p></p>
                <h1> Tech Stack: </h1>
                <ul>
                    <li> JavaScript </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> MeteoStat Weather API</li>
                </ul>
                <p></p>
                <a href="https://github.com/gracewanggw/tripPacker/" target="_blank" rel="noreferrer">
                    <img src={gitLogo} className="gitIcon" alt="GitHub"></img>
                </a>
            </div>
            </div>;
        const rideNow = <div class="project_wrap">
            <img src={wispApp} alt="Hi!" className="projectPhoto"/>
            <div className="project_description">
                <h1> Ride@Now</h1>
                <p> Ride@Now is an app that aims to facilitate ride sharing at Dartmouth. </p>
                <p> Currently working on this project through the Women in Science Program x DALI Lab </p>
                <p></p>
                <h1> Tech Stack: </h1>
                <ul>
                    <li> React Native</li>
                    <li> Redux </li>
                    <li> MongoDB </li>
                </ul>
                <p></p>
                <a href="https://github.com/dali-lab/wisp2021-app" target="_blank" rel="noreferrer">
                    <img src={gitLogo} className="gitIcon" alt="GitHub"></img>
                </a>
            </div>
            </div>;
        this.projects = [rememberMe, tripPacker, rideNow];
        this.btnTxt = ["Next", "Repeat"];
    }


   nextProject = () => {
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
                <h2>Projects: </h2>
                <p></p>
                <h3 className="project_wrap"> {this.projects[this.state.idx]}</h3>
                <p></p>
                <button className="button" onClick={this.nextProject}>{this.btnTxt[this.state.end]}</button>
            </div>
        </div>
    )
}
}

export default Projects;