import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

//COMPONENTS
import Projects from './components/Projects.js'
import About from './components/About.js'
import Introduction from './components/Introduction'
import ExoProject from './components/ExoProject.js'
import LCSearchProject from './components/LCSearchProject.js'
import TextProject from './components/TextProject.js'
import TUGProject from './components/TUGProject.js'
import Gallery from './components/Gallery.js'
import Cvpage from './components/Cvpage.js'
import Placeholder from './components/Placeholder.js'
import ScrollToTop from './components/ScrollToTop.js'


//IMAGES
import AwLogo from './components/img/awlogo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="nav">
          <nav role="navigation" className="navbar">
            <div id="navbar">
              <div id="homelogo">
                <NavLink exact to="/"><img src={AwLogo}/></NavLink>
              </div>
              <ul>
                <li><NavLink activeClassName="selected" to="/projects">PROJECTS</NavLink></li>
                <li><NavLink activeClassName="selected" to="/about">ABOUT ME</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
          <ScrollToTop />
          <Switch>
             <Route exact path="/">
              <Introduction />
             </Route>
             <Route path="/projects">
              <Projects />
             </Route>
             <Route path="/about">
              <About />
             </Route>
             <Route path="/exoProject">
              <ExoProject />
             </Route>
             <Route path="/textProject">
              <TextProject />
             </Route>
             <Route path="/LCSearchProject">
              <LCSearchProject />
             </Route>
             <Route path="/TUGProject">
              <TUGProject />
             </Route>
             <Route path="/Gallery">
              <Gallery />
             </Route>
             <Route path="/Cvpage">
              <Cvpage />
             </Route>
             <Route path="/placeholder">
              <Placeholder />
             </Route>

             <Route path="*">
              404 Not Found
             </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
