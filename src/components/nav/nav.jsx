import React, { Component } from 'react'

class Nav extends Component {
  static brand = 'Albert Sabaté'
  static menu = [
    {
      link: 'home',
      label: 'Home',
      default: true,
    }, {
      link: 'about',
      label: 'About',
    }, {
      link: 'skills',
      label: 'Skills',
    }, {
      link: 'portfolio',
      label: 'Portfolio',
    }, {
      link: 'contact',
      label: 'Contact',
    },
  ]

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/">{Nav.brand}</a>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            {Nav.menu.map(child => (
              <li className="nav-item active">
                <a className="nav-link" href={child.link}>
                  {child.label}
                  {child.default &&
                    <span className="sr-only">(current)</span>
                  }
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
