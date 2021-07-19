import React, { Component } from 'react'
//COMPONENTS

export default class Cvpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div id="cv_container">
        <embed src="cv.pdf" width="600px" height="850px" />
      </div>
    )
  }
}
