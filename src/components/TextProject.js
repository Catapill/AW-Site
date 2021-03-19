import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import BitLogo from './img/bitbucketLogo.svg'
import TextProj from './img/textLogo.svg'
import TextVis from './img/textVis.svg'
import TextTime from './img/textTime.jpg'

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
        <img src={TextProj} alt="Project Icon"></img>
        <div>
          <h1>Text analysis of Messages</h1>
          <h2>An analysis of thousands of messages pulled from whatsapp</h2>
        </div>
      </div>
        <div className="projectGroup">
          <div id="projectInfo" className="ProjectSect">
            <h2>Project Info</h2>
            <p>PROJECT TYPE: <span>Programming</span></p>
            <p>LANGUAGE: <span>Python</span></p>
            <p>SKILLS: <span>Machine Learning, Data Analysis</span></p>
            <p>TIME: <span>23/07/2020 - 27/08/2020</span></p>
            <p>TAGS: Keras, Data Analysis, Machine Learning, Text Data, Python, Visualisation</p>
          </div>

          <div id="projectContent" className="ProjectSect">
            <h2>Message Data</h2>
            <p>The data used for this project was pulled from WhatsApp chats, one set of messages from me and my partner and one group chat I have with some friends.
              The data was processed using Python packages Pandas and Numpy.</p>
            <h2>Analysis</h2>
            <p>The data was used to retrive information such as average words, messages and characters per day, a visualisation of the average messages sent hourly.
              A plot of the messages sent over the entire period of the data for each person and finally the frequency of words used.
              Functionality was also made to enable searching for words and return who said that word the most.
              This project also included one of my earliest experiments using new data with machine learning, in an attempt to classify new messages to see who is more likely to send it.</p>
            <h2>Conclusion</h2>
            <p>This project was purely for fun and worked quite well for the analysis and visualisation as well as the search for who said certain words the most.
              However, trouble was encoutered when developing the machine learning section as reliable results were not obtained, in the future I plan to return to this with additional data and knowldge.</p>
          </div>

          <div id="projectDisplay" className="ProjectSect">
            <h2>Images</h2>
            <div className="imageCollect">
              <img src={TextVis} alt="Text Visualisation"></img>
              <img src={TextTime} alt="Text Timeline"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
