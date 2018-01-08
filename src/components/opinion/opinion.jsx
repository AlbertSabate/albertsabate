import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import liherImg from '../../assets/img/opinion/liher.jpg'

import './opinion.sass'

class Opinions extends Component {
  render() {
    return (
      <section id="form-contact" className="form-contact">
        <Container className="text-center py-15">
          <h1>WHAT MY PREVIOUS BOSSES SAY</h1>
          <Row className="m-10">
            <Col className="p-5">
              <div className="opinion-box">
                <div className="opinion-img">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/liherdelrio/"
                    rel="noopener noreferrer"
                  >
                    <img src={liherImg} alt="Liher del Río" title="Liher del Río" />
                    <span>Liher del Río</span>
                  </a>
                </div>
                <div className="opinion-text">
                  Albert is an experienced developer with great coding skills.
                  He is collaborative and enjoys being part of a team working
                  together with nice sense of humor. He stays in the forefront
                  of emerging technologies and never stops learning. Albert is
                  a technology professional you can trust in.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Opinions
