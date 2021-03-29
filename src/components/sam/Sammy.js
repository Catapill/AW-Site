import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Qtwo from './Qtwo.js'

export default class Sammy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to the birthday zone!!!</h1>
        <h2>To win your birthday prize, you must answere these riddles five! heehheheheh</h2>
        <p>They're not really riddles tho</p>
        <h2>How long did it take for us to bear divinity? (only including our last playthought)</h2>
        <div id="projectInfo">
          <div className="buttons">
            <Link to="./Wrong"><button>132 Hours</button></Link>
            <Link to="./Qtwo"><button>141 Hours</button></Link>
            <Link to="./Wrong"><button>157 Hours</button></Link>
            <Link to="./Wrong"><button>162 Hours</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
