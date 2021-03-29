import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Happybirthday from './Happybirthday.js'

export default class Qfive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <p>Interstellar and memento are actually tied at 220/255</p>
        <h1>How much do you love Adum?</h1>
        <div id="projectInfo">
          <div className="buttons">
            <Link to="./Happybirthday"><button>Lots</button></Link>
            <Link to="./Happybirthday"><button>Lots and lots and lots</button></Link>
            <Link to="./Happybirthday"><button>so so so much</button></Link>
            <Link to="./Happybirthday"><button>all of the above</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
