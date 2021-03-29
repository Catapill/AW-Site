import React, { Component } from 'react'
//COMPONENTS

//IMAGES
import BitLogo from './img/bitbucketLogo.svg'
import LCSLogo from './img/LCSLogo.svg'
import RFtree from './img/RFtree.png'
import NNarch from './img/NNarch.svg'
import ExoVis from './img/exoVis.svg'
//GALLARY IMAGES
import Nightsky from './img/nightsky.png'
import Space from './img/space.png'
import Sunsetblock from './img/sunsetblock.png'
import Wraith from './img/wraith.png'
import Lander from './img/spaceship.png'

export default class Gallary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div className="gallaryPage">
        <div class="gallery">
          <figure class="gallery__item gallery__item--1">
            <img src={Nightsky} class="gallery__img" alt="Image 1"></img>
          </figure>
          <figure class="gallery__item gallery__item--2">
            <img src={Sunsetblock} class="gallery__img" alt="Image 2"></img>
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img src={Lander} class="gallery__img" alt="Image 3"></img>
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img src={Space} class="gallery__img" alt="Image 4"></img>
          </figure>
          <figure class="gallery__item gallery__item--5">
            <img src={Wraith} class="gallery__img" alt="Image 5"></img>
          </figure>
        </div>
        <h2>More Coming Soon!</h2>
      </div>
    )
  }
}
