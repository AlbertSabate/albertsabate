import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactSVG from 'react-svg'

import './skills.sass'

import AngularImg from '../../assets/img/logos/angular.svg'
import HTML5Img from '../../assets/img/logos/html5.svg'
import NodeJSImg from '../../assets/img/logos/nodejs.svg'
import PHPImg from '../../assets/img/logos/php.svg'
import ReactImg from '../../assets/img/logos/react.svg'
import SassImg from '../../assets/img/logos/sass.svg'

class Skills extends Component {
  static skillsIcon = [
    { ID: 0, img: HTML5Img },
    { ID: 1, img: AngularImg },
    { ID: 2, img: NodeJSImg },
    { ID: 3, img: PHPImg },
    { ID: 4, img: ReactImg },
    { ID: 5, img: SassImg },
  ]

  render() {
    return (
      <section id="skills" className="skills">
        <Container className="py-15">
          <Row className="text-center mb-10">
            <Col>
              <h1>My Skills</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {Skills.skillsIcon.map(skillIcon => (
              <Col className="skills-logos" key={`skill-icon-${skillIcon.ID}`}>
                <ReactSVG path={skillIcon.img} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
}

export default Skills
