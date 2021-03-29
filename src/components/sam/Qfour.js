import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Qfive from './Qfive.js'

export default class Qfour extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <p>It's very very close between interstellar and memento</p>
        <h1>Which is your favourite according to the BPO colour bot's red (emotion) section?</h1>
        <div id="projectInfo">
          <div className="buttons">
            <Link to="./Wrong"><button>Knives Out</button></Link>
            <Link to="./Wrong"><button>The Big Short</button></Link>
            <Link to="./Qfive"><button>Interstellar</button></Link>
            <Link to="./Qfive"><button>Memento</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
