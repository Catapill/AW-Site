import React, { Component } from 'react'
//COMPONENTS

export default class Wrong extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        <h1>WRONG!! GO BACK</h1>
      </div>
    )
  }
}
