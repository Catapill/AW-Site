import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div id="about-left">

        <div id="exp">
          <div class="exp">
            <h2>Programming</h2>
          </div>
          <div class="exp">
            <h2>Web Development</h2>
          </div>
          <div class="exp">
            <h2>Design</h2>
          </div>
        </div>
        <div id="current">
          <div class="current">
            <h2>Current Life</h2>
          </div>
        </div>
        </div>

        <div id="about-right">

          <div class="edu">
            <h2>Education</h2>
          </div>

          <div class="cv">
            <h2>CV</h2>
          </div>

        </div>
      </div>
    )
  }
}