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
        <div>
          Github Links
          Time Info
          LANGUAGE Info
          

        </div>
        <div>
          <p>This project was developed as part of my dissertation, It aimed to use satellite data to classify if a light curve was produced by an orbiting planet or if it was just a false positive.
            WHAT IS A LIGHT curve
            MODELS Used
            Methods
            Results

          </p>
        </div>
        <div>
          Images
        </div>
      </div>
    )
  }
}
