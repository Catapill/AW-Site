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
              <p>Excel</p>
              <p>SQL</p>
            </div>
            <div className="exp">
              <h2>Web Dev</h2>
              <p>JavaScript</p>
              <p>React</p>
              <p>PHP</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="exp">
              <h2>Design</h2>
              <p>Vector Graphics</p>
              <p>Affinity Design/Illustrator</p>
              <p>GIMP/Photoshop</p>
              <p>3D Graphics (Blender)</p>
            </div>
          </div>

          <div id="current">
            <div className="cur">
              <h2>Current Life</h2>
              <p>Text Analysis Project (revisited)</p>
              <p>Data Visualisation Project</p>
              <p>Job Preperations</p>
              <p>Portfolio Development</p>
            </div>
          </div>

          <div className="buttons">
            <a href="CV.pdf" download="CV.pdf"><button>CV</button></a>
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
            <h3>Courses</h3>
              <p>Web Application Integration</p>
              <p>Web Programming</p>
              <p>Machine Learning, AI and Computer Vision</p>
              <p>Computer Networks, Security and OS</p>
              <p>Program Design and Development</p>
              <p>Systems Analysis</p>
          </div>
        </div>
      </div>
    )
  }
}
