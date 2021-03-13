import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CardDeck } from 'react-bootstrap';
//COMPONENTS
import ProjectCard from './ProjectCard.js'
//IMAGES
import ExoProj from './SVG/vis.svg'
import TextProj from './SVG/text.svg'
import Awlogo from './SVG/awlogo.svg'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
         "title": "Exo-planet Discovery using Machine Learning",
         "desc": "A project that test multiple machine learning models to predict if a star has an orbiting planet.",
         "time": "12/05/2021",
         "img": ExoProj,
         "tag": "/placeholder"
        },
        {
         "title": "Text Analysis of messages",
         "desc": "Analysis of thousands of messages between me and my partner and machine learning to predict who is most likely to type a given message.",
         "time": "27/08/2020",
         "img": TextProj,
         "tag": "/placeholder"
        },
        {
         "title": "More Coming Soon",
         "desc": "",
         "time": "",
         "img": Awlogo,
         "tag": "/projects"
        },
      ]
    }
  }
  render() {
    return (
      <div id="projects">
        <CardDeck>
          {this.state.data.map( (details, i) => (<ProjectCard key={i} details={details} />) )}
        </CardDeck>
      </div>
    )
  }
}
