import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import GitLogo from './img/githubLogo.svg'
import TUGProj from './img/tugLogo.svg'
import TestAcc from './img/testAcc.png'
import TUGLabel from './img/labeledTUG.png'
import TUGNoiseOne from './img/TUGnoiseOne.png'
import TUGNoiseTwo from './img/TUGnoiseTwo.png'

export default class TUGProject extends Component {
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
        <img src={TUGProj} alt="Project Icon"></img>
        <div>
          <h1>Stand Up and Go Test Analysis</h1>
          <h2>Machine learning for auto segmentation of TUG tests</h2>
        </div>
      </div>
        <div className="projectGroup">
          <div id="projectInfo" className="projectSect">
            <h2>Links</h2>
            <div className="buttons">
              <button><a href="https://github.com/Catapill/TUG_Analysis"><img src={GitLogo} alt="Repo Icon"></img>Repo</a></button>
            </div>
            <h2>Project Info</h2>
            <p>PROJECT TYPE: <span>Programming</span></p>
            <p>LANGUAGE: <span>Python</span></p>
            <p>TIME: <span>18/02/2021 - 07/05/2021</span></p>
            <p>SKILLS: Machine Learning, Data Analysis, Writing</p>
            <p>TAGS:Sklearn, Data Analysis, Machine Learning, Time Series, Python, Segmentation</p>
          </div>

          <div id="projectContent" className="projectSect">
            <h2>What is a TUG Test?</h2>
            <p>A timed stand up and go test is the test given to people to evaluate their risk of falling, typically used with elderly individuals.
              An accelerometer is attatched to the person as they take the test and the results can be analysed in the form of z-axis acceleration.
              These results can be manually labeled and evaluate the risk of an individual falling.</p>
            <h2>Models</h2>
            <p>The model used to automatically segment the data is a Gaussian process classifier (GPC).
              First the data is manually labeled as you can see in the first image. Then the classifier is trained on the data and predicts on test data with high accuracy.
              This was a group project with my part being focused on the machine learning, unfortunetly the data aqusition had some difficulties and synthetic data was used in it's place.
              This was generated by applying noise to the data.</p>
            <h2>Conclusion</h2>
            <p>The model work well getting an accuracy of 95%. The data is segmented into walking, standing, still and posutral transition.</p>
          </div>

          <div id="projectDisplay" className="projectSect">
            <h2>Images</h2>
            <div className="imageCollect">
              <img src={TUGNoiseOne} alt="original light curve"></img>
              <img src={TUGNoiseTwo} alt="noise generated light curves"></img>
              <img src={TUGLabel} alt="similarity light curve"></img>
              <img src={TestAcc} alt="similarity light curve"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
