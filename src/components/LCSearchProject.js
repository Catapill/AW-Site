import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import BitLogo from './img/bitbucketLogo.svg'
import LCSLogo from './img/LCSLogo.svg'
import RFtree from './img/RFtree.png'
import NNarch from './img/NNarch.svg'
import ExoVis from './img/exoVis.svg'

export default class LCSearchProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div className="project">
      <div className="projHeader">
        <img src={LCSLogo} alt="Project Icon"></img>
        <div>
          <h1>Light Curve Search</h1>
          <h2>Machine learning to search for solar systems using a drawing</h2>
        </div>
      </div>
        <div className="projectGroup">
          <div id="projectInfo" className="projectSect">
            <h2>Links</h2>
            <div className="buttons">
              <button><a href="https://bitbucket.org/adamwoods13/exo-planet"><img src={BitLogo} alt="Repo Icon"></img>Repo</a></button>
            </div>
            <h2>Project Info</h2>
            <p>PROJECT TYPE: <span>Programming</span></p>
            <p>LANGUAGE: <span>Python</span></p>
            <p>TIME: <span>18/02/2021 - CURRENT</span></p>
            <p>SKILLS: Machine Learning, Data Analysis, Writing</p>
            <p>TAGS: Keras, Sklearn, Data Analysis, Machine Learning, Exo-planets, Python, Light curves, Tkinter</p>
          </div>

          <div id="projectContent" className="projectSect">
            <h2>What is a light curve?</h2>
            <p>A light curve is the folded light intensity of a star over time, as an object passes in front of the star the light intesity dips creating a curve.
              The object that makes the curve could be a planet, eclipsing binary star or simply a oulier due to noise.
              This project takes user input in the form of a drawing and uses machine learning to return five similar light curves using fuzzy logic.</p>
            <h2>Models</h2>
            <p>Model information coming soon</p>
            <h2>Conclusion</h2>
            <p>Conclusion coming soon</p>
          </div>

          <div id="projectDisplay" className="projectSect">
            <h2>Images</h2>
            <div className="imageCollect">
              <img src={RFtree} alt="RF Tree"></img>
              <img src={ExoVis} alt="Light Curve"></img>
              <img src={NNarch} alt="NN Architecture"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
