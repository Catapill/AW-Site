import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Qfour from './Qfour.js'

export default class Qthree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        <p>I have 66 hours played as ironclad and 52 as the silent</p>
        <h1>Which of these films is adums favourite?</h1>
        <div id="projectInfo">
          <div className="buttons">
            <Link to="./Wrong"><button>Knives Out</button></Link>
            <Link to="./Wrong"><button>The Big Short</button></Link>
            <Link to="./Wrong"><button>Interstellar</button></Link>
            <Link to="./Qfour"><button>Memento</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
