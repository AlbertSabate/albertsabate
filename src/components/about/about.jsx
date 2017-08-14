import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

import './about.sass'

import AlbertImg from '../../assets/img/albert.jpg'

class About extends Component {
  static profileAbout = [
    {
      ID: 'NAME',
      title: 'NAME',
      label: 'Albert Sabaté',
    }, {
      ID: 'JOB_TITLE',
      title: 'JOB TITLE',
      label: 'JS Developer',
    }, {
      ID: 'AGE',
      title: 'AGE',
      label: 27,
    }, {
      ID: 'LOCATION',
      title: 'LOCATION',
      label: 'Barcelona, Spain',
    },
  ]

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
                {About.profileAbout.map(about => (
                  <div className="col-6 mb-5" key={`profile-about-${about.ID}`}>
                    <span className="profile-about-title">{about.title}</span>
                    <span className="profile-about-label">{about.label}</span>
                  </div>
                ))}
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
