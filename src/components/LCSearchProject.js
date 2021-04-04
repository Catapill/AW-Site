import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import GitLogo from './img/githubLogo.svg'
import LCSLogo from './img/LCSLogo.svg'
import SimOne from './img/similarityOne.png'
import SimTwo from './img/similarityTwo.png'
import NoiseOne from './img/noiseOne.png'
import NoiseTwo from './img/noiseTwo.png'

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
              <button><a href="https://github.com/Catapill/LightCurveSearch"><img src={GitLogo} alt="Repo Icon"></img>Repo</a></button>
            </div>
            <h2>Project Info</h2>
            <p>PROJECT TYPE: <span>Programming</span></p>
            <p>LANGUAGE: <span>Python</span></p>
            <p>TIME: <span>18/02/2021 - CURRENT</span></p>
            <p>SKILLS: Machine Learning, Data Analysis, Writing</p>
            <p>TAGS: Keras, Sklearn, Data Analysis, Machine Learning, Exo-planets, Python, Light curves, Tkinter, Notebook</p>
          </div>

          <div id="projectContent" className="projectSect">
            <h2>What is a light curve?</h2>
            <p>A light curve is the folded light intensity of a star over time, as an object passes in front of the star the light intesity dips creating a curve.
              The object that makes the curve could be a planet, eclipsing binary star or simply a oulier due to noise.
              This project takes user input in the form of a drawing and uses machine learning to return five similar light curves using fuzzy logic.</p>
            <h2>Models</h2>
            <p>The model used is a Naive Bayes classifier which uses the kepler ID as a label.
              Because each kepler ID only has one associated light curve I needed to create some synthetic data to train the model.
              This was done by generating noise and applying that noise to the light curve, and example of this can be seen in the first two images.</p>
            <h2>Conclusion</h2>
            <p>The model worked well as some light curve searches can be seen in the images section.
              The model returns a similar light curve and produces a link to the exoplanet archive of the system the light curve originates.
              Here you can see a lot of information about the system and the planet if there was one.</p>
          </div>

          <div id="projectDisplay" className="projectSect">
            <h2>Images</h2>
            <div className="imageCollect">
              <img src={NoiseOne} alt="original light curve"></img>
              <img src={NoiseTwo} alt="noise generated light curves"></img>
              <img src={SimOne} alt="similarity light curve"></img>
              <img src={SimTwo} alt="similarity light curve"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
