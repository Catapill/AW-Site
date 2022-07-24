import React, { Component } from 'react'

//IMAGES
import SpotifyLogo from './img/spotifyLogo.svg'
import LinkedLogo from './img/inLogo.svg'
import GitLogo from './img/githubLogo.svg'
import BitLogo from './img/bitbucketLogo.svg'
import MailLogo from './img/gmailLogo.svg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" data-section="home">
          <div>
            <h1>ADAM WOODS</h1>
            <h2>DATA SCIENCE, ANALYSIS AND VISUALISATION</h2>
            <p>Hello, I'm Adam.
            A data analyst and graduate of Northumbria University where I studied Computer Science with Artificial Intelligence.</p>
            <div className="footer">
              <div id="links">
                <a href="https://open.spotify.com/user/adam.woods13?si=KFcotWdGS6iOVsaKPHFqzg"><img id="spot" className="logo" src={SpotifyLogo}/></a>
                <a href="https://www.linkedin.com/in/adam-woods-693232202/"><img id="linked" className="logo" src={LinkedLogo}/></a>
                <a href="https://github.com/Catapill"><img id="git" className="logo" src={GitLogo}/></a>
                <a href="https://bitbucket.org/adamwoods13/"><img id="bit" className="logo" src={BitLogo}/></a>
                <a onClick={() => {navigator.clipboard.writeText("adam.woods13@icloud.com")}}><img id="email" className="logo" src={MailLogo}/><span className="tooltip">Copy Email to Clipboard</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
