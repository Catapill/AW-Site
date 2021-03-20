import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import BitLogo from './img/bitbucketLogo.svg'
import ExoProj from './img/exoLogo.svg'
import RFtree from './img/RFtree.png'
import NNarch from './img/NNarch.svg'
import ExoVis from './img/exoVis.svg'

export default class ExoProject extends Component {
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
        <img src={ExoProj} alt="Project Icon"></img>
        <div>
          <h1>Exo-planet Discovery Using Machine Learning</h1>
          <h2>An Investigative Project Into Machine Learning Methods Using Satellite Data</h2>
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
            <p>LANGUAGE: <span>Python, LaTeX</span></p>
            <p>TIME: <span>20/10/2020 - CURRENT</span></p>
            <p>SKILLS: Machine Learning, Data Analysis, Writing</p>
            <p>TAGS: Keras, Sklearn, Data Analysis, Machine Learning, Exo-planets, Python, LaTeX, Light curves</p>
          </div>

          <div id="projectContent" className="projectSect">
            <h2>What is a light curve?</h2>
            <p>A light curve is the folded light intensity of a star over time, as an object passes in front of the star the light intesity dips creating a curve.
              The object that makes the curve could be a planet, eclipsing binary star or simply a oulier due to noise.
              This project uses this data to classify light curves into planet candidates and false positives using a variety of machine learning methods.
              The data was collected from Nasa's Exoplanet Archive, it was downloaded and processed using a Python package called LightKurve.</p>
            <h2>Models</h2>
            <p>The models used in this project include Random Forest, Convolutional Neural Network, Gaussian Process Classifier and Support Vector Machine.
              They were chosen due to a study of the literature surrounding the data and their performance when solving similar problems.
              The models were built using Python packages Sklearn and Keras.</p>
            <h2>Conclusion</h2>
            <p>The project worked well with all models reaching an accuracy above 90%. The Convolutional Nerual Network performed the best at 93.31% accuracy.
              The dissertation was written in LaTeX and goes into detail about all results and the development of the models.</p>
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
