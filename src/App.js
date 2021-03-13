import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

//COMPONENTS
import Projects from './components/Projects.js'
import About from './components/About.js'
import Personal from './components/Personal.js'
import Introduction from './components/Introduction'
import ExoProject from './components/ExoProject.js'
import TextProject from './components/TextProject.js'
import Placeholder from './components/Placeholder.js'

//IMAGES
import AwLogo from './components/SVG/awlogo.svg';

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
                <li><NavLink activeClassName="selected" to="/placeholder">ABOUT ME</NavLink></li>
                <li><NavLink activeClassName="selected" to="/placeholder">PERSONAL</NavLink></li>
              </ul>
            </div>
          </nav>
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
           <Route path="/personal">
            <Personal />
           </Route>
           <Route path="/exoProject">
            <ExoProject />
           </Route>
           <Route path="/textProject">
            <TextProject />
           </Route>
           <Route path="/placeholder">
            <Placeholder />
           </Route>
           <Route path="*">
            404 Not Found
           </Route>
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
