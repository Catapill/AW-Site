import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//COMPONENTS

import Wrong from './Wrong.js'
import Happybirthday from './Happybirthday.js'

import Otter from './otter.png'

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
        <h1>Happy Birthday Sammy!</h1>
        <img src={Otter}></img>
        <h1>Love you</h1>
      </div>
    )
  }
}
