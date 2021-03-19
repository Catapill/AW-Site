import React, { Component } from 'react'
//COMPONENTS

export default class Placeholder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
        <h1>Page Coming Soon :)</h1>
      </div>
    )
  }
}
