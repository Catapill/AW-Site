import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Qthree from './Qthree.js'

export default class Qtwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <p>Jeez that took a while</p>
        <h1>Which slay the spire character have we played the most? (going off of my account but I rarely played it without you)</h1>
        <div id="projectInfo">
          <div className="buttons">
            <Link to="./Qthree"><button>Ironclad</button></Link>
            <Link to="./Wrong"><button>Silent</button></Link>
            <Link to="./Wrong"><button>Defect</button></Link>
            <Link to="./Wrong"><button>Watcher</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
