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

  const basics = <ul>
    <li>I am a Dartmouth '24 from Houston, Texas planning to study computer science and mathematics</li> 
    <li> Currently, I am on-campus taking classes and working with the DALI Lab through the Women in Science Program</li>
    <li> I am also involved with CoderDojo at Dartmouth and am a math tutor on the side</li>
    <li> I love learning new things and sharing my knowledge as well</li>
    <li> In my free time, I enjoy playing spikeball with friends, exploring the outdoors, and baking </li>
    <li> I love jamming out to music when I work, some of my favorite artists are Taylor Swift, Jon Bellion, and Quinn XCII</li>
  </ul>

  /*const cs50 = <a href="https://www.cs.dartmouth.edu/~cs50/" target="_blank"  rel="noreferrer" >CS 50</a>;
  const math22 = <a href="https://math.dartmouth.edu/~m22s21/info.html" target="_blank"  rel="noreferrer" >Math 22</a>;
  const germ14 = <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/German-Studies/GERM-German-Studies/GERM-14" target="_blank"  rel="noreferrer" >Into the Woods</a>;
  const classes = [cs50, "    ", math22, "    ", germ14, <br />]; */

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
                  <h1> About Me: </h1>
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
