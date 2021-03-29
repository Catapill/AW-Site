import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

//COMPONENTS
import Projects from './components/Projects.js'
import About from './components/About.js'
import Personal from './components/Personal.js'
import Introduction from './components/Introduction'
import ExoProject from './components/ExoProject.js'
import LCSearchProject from './components/LCSearchProject.js'
import TextProject from './components/TextProject.js'
import Gallary from './components/Gallary.js'
import Placeholder from './components/Placeholder.js'

import Sammy from './components/sam/Sammy.js'
import Wrong from './components/sam/Wrong.js'
import Qtwo from './components/sam/Qtwo.js'
import Qthree from './components/sam/Qthree.js'
import Qfour from './components/sam/Qfour.js'
import Qfive from './components/sam/Qfive.js'
import Happybirthday from './components/sam/Happybirthday.js'


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
                <li><NavLink activeClassName="selected" to="/placeholder">ABOUT ME</NavLink></li>
                <li><NavLink activeClassName="selected" to="/placeholder">PERSONAL</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
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
           <Route path="/LCSearchProject">
            <LCSearchProject />
           </Route>
           <Route path="/Gallary">
            <Gallary />
           </Route>
           <Route path="/placeholder">
            <Placeholder />
           </Route>

           <Route path="/Sammy">
            <Sammy />
           </Route>
           <Route path="/Wrong">
            <Wrong />
           </Route>
           <Route path="/Qtwo">
            <Qtwo />
           </Route>
           <Route path="/Qthree">
            <Qthree />
           </Route>
           <Route path="/Qfour">
            <Qfour />
           </Route>
           <Route path="/Qfive">
            <Qfive />
           </Route>
           <Route path="/Happybirthday">
            <Happybirthday />
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
