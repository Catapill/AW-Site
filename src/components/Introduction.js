import React, { Component } from 'react'

//IMAGES
import SpotifyLogo from './SVG/spotifyLogo.svg'
import LinkedLogo from './SVG/inLogo.svg'
import GitLogo from './SVG/githubLogo.svg'
import BitLogo from './SVG/bitbucketLogo.svg'
import MailLogo from './SVG/gmailLogo.svg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" data-section="home">
          <div>
            <h1>ADAM WOODS</h1>
            <h2>SOFTWARE, DATA ANALYSIS AND DESIGN</h2>
            <p>Hello, I'm Adam.
            A final year student at Northumbria University Studying Computer Science with Artificial Intelligence.
            I do art, design, programming and web development.</p>
            <div className="footer">
              <div id="links">
                <a href="https://open.spotify.com/user/adam.woods13?si=KFcotWdGS6iOVsaKPHFqzg"><img id="spotifyLogo" className="logo" src={SpotifyLogo}/></a>
                <a href="https://www.linkedin.com/in/adam-woods-693232202/"><img id="spotifyLogo" className="logo" src={LinkedLogo}/></a>
                <a href="https://github.com/Catapill"><img id="spotifyLogo" className="logo" src={GitLogo}/></a>
                <a href="https://bitbucket.org/adamwoods13/"><img id="spotifyLogo" className="logo" src={BitLogo}/></a>
                <a onClick={() => {navigator.clipboard.writeText("adam.woods13@icloud.com")}}><img id="spotifyLogo" className="logo" src={MailLogo}/></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
