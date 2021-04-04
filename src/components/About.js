import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div id="about-left">
          <div id="exp">
            <div className="exp">
              <h2>Programming</h2>
              <p>Python</p>
              <p>MATLAB</p>
              <p>Java</p>
            </div>
            <div className="exp">
              <h2>Web Development</h2>
              <p>JavaScript</p>
              <p>React</p>
              <p>PHP</p>
              <p>SQL</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="exp">
              <h2>Design</h2>
              <p>Vector Graphics</p>
              <p>Affinity Design/Illustrator</p>
              <p>GIMP/Photoshop</p>
            </div>
          </div>

          <div id="current">
            <h2>Current Life</h2>
            <p><a>Exo-planet Project (Dissertation)</a></p>
            <p><a>Light Curve Search Project</a></p>
            <p><a>TUG_Analysis Project</a></p>
            <p>Portfolio Development</p>
            <p>Google's Foobar Challenge</p>
          </div>
        </div>

        <div id="about-right">

          <div className="edu">
            <h2>Education</h2>
            <h3>A-Levels</h3>
              <p>Computer Science</p>
              <p>Physics</p>
              <p>History</p>
            <h3>University</h3>
              <p>Northumbria University</p>
              <p>Computer Science with Artificial Intelligence</p>
              <p>Web Application Integration</p>
              <p>Web Programming</p>
              <p>Machine Learning and Computer Vision</p>
              <p>Human Computer Interaction</p>
              <p>Computer Networks, Security and OS</p>
              <p>Program Design and Development</p>
              <p>Systems Analysis</p>
              <p>AI and Robotics</p>
              <p>Team Project and Professionalism</p>
          </div>

          <div className="cv">
            <h2>CV</h2>
          </div>

        </div>
      </div>
    )
  }
}
