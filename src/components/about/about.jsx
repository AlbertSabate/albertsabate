import React, { Component } from 'react'
import { Button } from 'reactstrap'

import goTo from '../../helpers/go-to'

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

  static hireMe(e) {
    e.preventDefault()

    goTo('contact')
  }

  static downloadCV(e) {
    e.preventDefault()

    window.open('/assets/files/AlbertSabate_CV.pdf', 'resizeable,scrollbar')
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="container py-15">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-picture">
                <img src={AlbertImg} alt="Albert Sabaté" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="pl-10 pt-10">
                <div className="profile-desc mb-8">
                  <h1>HELLO WORLD!</h1>
                  <p className="my-8">
                    {`My name is Albert a JavaScript Developer from Barcelona. I love being able to
                    combine the power of the Backend with the beauty of the Frontend, also I'm very
                    interested on UX. I’m a very uncomplicated person: I love technology and sports.`}
                  </p>
                </div>
                <div className="row mb-10 profile-about">
                  {About.profileAbout.map(about => (
                    <div className="col-6 mb-5" key={`profile-about-${about.ID}`}>
                      <span className="profile-about-title">{about.title}</span>
                      <span className="profile-about-label">{about.label}</span>
                    </div>
                  ))}
                </div>
                <div className="row text-center justify-content-center">
                  <div className="col-4">
                    <Button color="primary" onClick={About.downloadCV}><i className="fa fa-download" /> Download CV</Button>
                  </div>
                  <div className="col-4">
                    <Button color="secondary" onClick={About.hireMe}><i className="fa fa-send" /> Hire Me</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
