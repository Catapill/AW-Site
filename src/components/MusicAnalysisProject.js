import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import MusicAna from './img/musicAnalysisLogo.svg'
import PowerLogo from './img/powerBILogo.svg'
import Image1 from './img/releaseyearPop.png'
import Image2 from './img/musicMap.png'
import Image3 from './img/trackTimeline.png'

export default class MusicAnalysisProject extends Component {
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
        <img src={MusicAna} alt="Project Icon"></img>
        <div>
          <h1>Monthly Playlist Analysis Using Power BI</h1>
          <h2>A Visualisation of monthly playlists containing all new music I have listened to</h2>
        </div>
      </div>
        <div className="projectGroup">
          <div id="projectInfo" className="projectSect">
            <h2>Links</h2>
            <div className="buttons">
              <button><a href="https://app.powerbi.com/view?r=eyJrIjoiOGU1M2Y3OTgtM2E4MS00MDdkLWFkNjgtZGEyNzA5MTU5YzA4IiwidCI6IjQwYzE1OWE2LThkN2MtNDVkMS1iNWJiLTI5MDlhODc5YWEzNiJ9&pageName=ReportSection"><img src={PowerLogo} alt="Repo Icon"></img>Link</a></button>
            </div>
            <h2>Project Info</h2>
            <p>PROJECT TYPE: <span>Programming</span></p>
            <p>LANGUAGE: <span>Python, M, DAX</span></p>
            <p>TIME: <span>14/07/2022 - 24/07/2022</span></p>
            <p>SKILLS: Data Analysis, Visualisation, Data Processing, Design</p>
            <p>TAGS: Data Analysis, Python, Power BI, Spotify, Spotipy,</p>
          </div>

          <div id="projectContent" className="projectSect">
            <h2>Music Data</h2>
            <p>I used my own personal Spotify data for this project, it consists of all my liked tracks, a massive playlist containing all music I enjoy,
            and many monthly playlists containing all the new music I have listened to in that month.
            The data was fetched using Python with the help of a library called Spotipy, using Spotify's API to fetch the data.
            Task scheduling was done in order to automatically update the data at the start of each month.</p>
            <h2>Visualisation</h2>
            <p>Power BI was used for visualisation, creating three tables for the data and joining them via the Track URI.
            M code was used to process the data once loaded into Power BI, from there most visualisations can be done.
            DAX was used to make small calculations for slightly more complex graphics.</p>
            <h2>Conclusion</h2>
            <p>This small personal project was very fun, I gained a lot of knowledge for working with APIs and am happy with the automation of the project.
            In the future I want to add more tables from external sources to add to the analysis of my music.</p>
          </div>

          <div id="projectDisplay" className="projectSect">
            <h2>Images</h2>
            <div className="imageCollect">
              <img src={Image2} alt="Music Map"></img>
              <img src={Image1} alt="Release Year Popularity"></img>
              <img src={Image3} alt="Track Timeline"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
