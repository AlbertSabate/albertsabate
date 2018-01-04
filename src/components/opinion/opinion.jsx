import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';


import './opinion.sass'

class Opinions extends Component {
  render() {
    return (
      <section id="form-contact" className="form-contact">
        <Container className="text-center py-15">
          <h1>WHAT MY PREVIOUS BOSSES SAY</h1>
          <Row className="m-10">
            <Col sm="6" md="6" className="p-5">
              <div className="opinion-box">
                Lorem ipsum
              </div>
            </Col>
            <Col sm="6" md="6" className="p-5">
              <div className="opinion-box">
                Lorem ipsum
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Opinions
