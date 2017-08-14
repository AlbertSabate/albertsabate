import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

import './about.sass'

import AlbertImg from '../../assets/img/albert.jpg'

class About extends Component {
  render() {
    return (
      <section className="container about">
        <div className="row my-15">
          <div className="col-md-4">
            <div className="profile-picture">
              <img src={AlbertImg} alt="Albert Sabaté" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="pl-10 pt-10">
              <div className="profile-desc mb-8">
                <h1>HEY!</h1>
                <p className="my-8">
                  {`My name is Albert a JavaScript Developer from Barcelona. I love being able to
                  combine the power of the Backend with the beauty of the Frontend, also I'm very
                  interested on UX. I’m a very uncomplicated person: I love technology and sports.`}
                </p>
              </div>
              <div className="row mb-8 profile-about">
                <div className="col-6 mb-5">
                  <span className="profile-about-title">NAME</span>
                  <span className="profile-about-label">Albert Sabaté</span>
                </div>
                <div className="col-6 mb-5">
                  <span className="profile-about-title">JOB TITLE</span>
                  <span className="profile-about-label">JS Developer</span>
                </div>
                <div className="col-6 mb-5">
                  <span className="profile-about-title">AGE</span>
                  <span className="profile-about-label">27</span>
                </div>
                <div className="col-6 mb-5">
                  <span className="profile-about-title">LOCATION</span>
                  <span className="profile-about-label">Barcelona, Spain</span>
                </div>
              </div>
              <ButtonGroup>
                <Button color="primary"><i className="fa fa-download" />Download CV</Button>
                <Button color="secondary"><i className="fa fa-send" />Hire Me</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
