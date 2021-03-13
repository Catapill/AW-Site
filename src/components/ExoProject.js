import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CardDeck } from 'react-bootstrap';
//COMPONENTS

export default class ExoProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        <h1>Exo-planet Discovery Using Machine Learning</h1>
        <h2>An Investigative Project Into Machine Learning Methods Using Satellite Data</h2>
      </div>
    )
  }
}
