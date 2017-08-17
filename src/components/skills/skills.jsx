import React, { Component } from 'react'
import ReactSVG from 'react-svg'

import './skills.sass'

import AngularImg from '../../assets/img/logos/angular.svg'
import HTML5Img from '../../assets/img/logos/html5.svg'
import NodeJSImg from '../../assets/img/logos/nodejs.svg'
import ReactImg from '../../assets/img/logos/react.svg'
import SassImg from '../../assets/img/logos/sass.svg'

class Skills extends Component {
  static skillsIcon = [
    { ID: 0, img: HTML5Img },
    { ID: 1, img: AngularImg },
    { ID: 2, img: NodeJSImg },
    { ID: 3, img: ReactImg },
    { ID: 4, img: SassImg },
  ]

  render() {
    return (
      <section id="skills" className="skills">
        <div className="container py-15">
          <div className="row text-center mb-10">
            <div className="col">
              <h1>My Skills</h1>
            </div>
          </div>
          <div className="row justify-content-md-center">
            {Skills.skillsIcon.map(skillIcon => (
              <div className="col skills-logos" key={`skill-icon-${skillIcon.ID}`}>
                <ReactSVG path={skillIcon.img} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
