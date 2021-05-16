import pic from "./photos/profile.jpg";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FunPics from "./components/FunPics.js";
import Projects from "./components/Projects.js";
import gitLogo from "./photos/githubLogo.png";
import linkedIn from "./photos/linkedinLogo.png";
import instaLogo from "./photos/instaLogo.png";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 


function App() {
  const header = ["Hi there!", <br />,"Welcome to my website!"];
  const intro = ["Explore this website to get to know me!"];

  const basics = <ul style={{color: "white"}}>
    <li>I am a <b>Dartmouth '24</b> from <b>Houston, Texas</b> planning to study <b>computer science and mathematics</b></li> 
    <li> Currently, I am on-campus <b>taking classes</b> and working with the <b>DALI Lab through the Women in Science Program</b></li>
    <li> I am also involved with <b>CoderDojo</b> at Dartmouth and am a <b>math tutor</b> on the side</li>
    <li> I love learning new things and sharing my knowledge as well</li>
    <li> In my free time, I enjoy playing <b>spikeball</b> with friends, <b>exploring the outdoors</b>, and <b>baking</b> </li>
    <li> I love jamming out to music when I work, some of my favorite artists are <b>Taylor Swift, Jon Bellion, and Quinn XCII</b></li>
  </ul>

  const contact = <ul>
    <a href="https://www.instagram.com/grace.wangggg/" target="_blank"  rel="noreferrer" >
      <img src={instaLogo} className="icons" alt="Instagram"></img></a> 
    <a href="https://www.linkedin.com/in/gracewang809/" target="_blank"  rel="noreferrer" >
      <img src={linkedIn} className="icons" alt="LinkedIn"></img>
    </a>
    <a href="https://github.com/gracewanggw" target="_blank"  rel="noreferrer" >
      <img src={gitLogo} className="icons" alt="GitHub"></img>
    </a>
  </ul>

  return (
    <div className = "App"> 
          <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home"> 
            <div className="heading">
              <h1>{header}</h1>
            </div>
            <figure>
                  <img src={pic} alt="Hi!" className="profilephoto"/>
            </figure>
            <h2> Grace Wang </h2>
            <p>{intro}</p>
            <hr></hr>
            <div>{contact}</div>
          </Route>
          <Route path="/About">
              <div className="heading">
                <p></p>
                  <h1 style={{fontWeight: 750}}> About Me: </h1>
                  <p> {basics}</p>
                  <p></p>
              </div>
              <FunPics/>
              <hr></hr>
              <div>{contact}</div>
          </Route>
          <Route path="/Projects">
            <Projects/>
            <hr></hr>
            <div>{contact}</div>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}


export default App;
