import React, { Component } from 'react'

import './footer.sass'

class Footer extends Component {
  static year = moment().format('YYYY')
  static socialIcons = [
    {
      ID: 'github',
      icon: 'github',
      link: 'https://github.com/AlbertSabate',
    }, {
      ID: 'linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/albertsabatemartinez',
    },
  ]

  render() {
    return (
      <footer className="text-center container-fluid py-15">
        <div className="row">
          <div className="col">
            Copyright © {Footer.year}. All rights reserved Designed By
            <span className="brand brand-space-left">
              <span>Albert</span>
              <span>Sabaté</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            {Footer.socialIcons.map(socialIcon => (
              <a
                key={`footer-icon-${socialIcon.ID}`}
                target={socialIcon.ID}
                href={socialIcon.link}
                className="social-icon"
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i className={`fa fa-${socialIcon.icon} fa-stack-1x fa-inverse`} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
