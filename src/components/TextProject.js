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
        <h1>Text Analysis of Messages</h1>
        <h2>A small project to analyse messages from a WhatApp chat</h2>
      </div>
    )
  }
}
