import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CardDeck } from 'react-bootstrap';
//COMPONENTS
import ProjectCard from './ProjectCard.js'
//IMAGES
import ExoProj from './img/exoLogo.svg'
import TextProj from './img/textLogo.svg'
import Awlogo from './img/logoSquare.svg'
import ArtProj from './img/artLogo.svg'
import LCSProj from './img/LCSLogo.svg'

export default class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
         "title": "Exo-planet Discovery using Machine Learning",
         "desc": "A project that test multiple machine learning models to predict if a star has an orbiting planet.",
         "time": "WIP",
         "img": ExoProj,
         "tag": "/ExoProject"
        },
        {
         "title": "Text Analysis of messages",
         "desc": "Analysis of thousands of messages between me and my partner and machine learning to predict who is most likely to type a given message.",
         "time": "27/08/2020",
         "img": TextProj,
         "tag": "/textProject"
        },
        {
         "title": "Light Curve Search",
         "desc": "An application that takes a drawing as input and returns a solar system based on what you drew.",
         "time": "WIP",
         "img": LCSProj,
         "tag": "/placeholder"
        },
        {
         "title": "Art Gallary",
         "desc": "Small art projects and one off designs.",
         "time": "NEVER!",
         "img": ArtProj,
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
