import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import moment from 'moment'

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
      label: 'Web Developer',
    }, {
      ID: 'AGE',
      title: 'AGE',
      label: moment().diff('1990-02-10', 'years'),
    }, {
      ID: 'LOCATION',
      title: 'LOCATION',
      label: 'Singapore',
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
        <Container className="py-15">
          <Row>
            <Col xs="false" md="4">
              <div className="profile-picture">
                <img src={AlbertImg} alt="Albert Sabaté" />
              </div>
            </Col>
            <Col xs="false" md="8">
              <div className="pt-10">
                <div className="profile-desc mb-8">
                  <h1>HELLO!</h1>
                  <span className="my-8">
                    <p>
                      My name is Albert a JavaScript Developer from Barcelona. I love being able to
                      combine the power of the <i>backend</i> with the beauty of the
                      <i> frontend</i>. I’m also very interested in <i>UX</i>.
                    </p>
                    <p>I’m a very easy person: I love technology, travel and sports.</p>
                  </span>
                </div>
                <Row className="mb-10 profile-about">
                  {About.profileAbout.map(about => (
                    <Col xs="6" className="mb-5" key={`profile-about-${about.ID}`}>
                      <span className="profile-about-title">{about.title}</span>
                      <span className="profile-about-label">{about.label}</span>
                    </Col>
                  ))}
                </Row>
                <Row className="text-center">
                  <Col>
                    <Button color="primary" onClick={About.downloadCV}>
                      <i className="fa fa-download" /> Download CV
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default About
