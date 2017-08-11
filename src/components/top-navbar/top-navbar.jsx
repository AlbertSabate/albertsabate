import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import addEvent from '../../helpers/add-event'
import getNavbarHeight from '../../helpers/get-navbar-height'

import './top-navbar.sass'

class TopNavbar extends Component {
  static menu = [
    {
      link: '#home',
      label: 'HOME',
    }, {
      link: '#about',
      label: 'ABOUT',
    }, {
      link: '#skills',
      label: 'SKILLS',
    }, {
      link: '#portfolio',
      label: 'PORTFOLIO',
    }, {
      link: '#contact',
      label: 'CONTACT',
    },
  ]

  constructor(props) {
    super(props);

    this.state = {
      isHome: true,
      isOpen: false,
    }
    this.navHeight = 0

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.navHeight = getNavbarHeight()

    setInterval(() => { // this is for if anybody change font size
      this.navHeight = getNavbarHeight()
    }, 2500)

    addEvent(window, 'scroll', () => {
      this.setState({
        isHome: window.scrollY < window.innerHeight - this.navHeight,
      })
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const home = this.state.isHome ? 'navbar-home' : ''

    return (
      <Navbar role="navigation" light inverse fixed="top" toggleable className={home}>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/" className="brand">
          <span>Albert</span>
          <span>Sabaté</span>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {TopNavbar.menu.map(child => (
              <NavItem key={`nav-dropdown-${child.label}`}>
                <NavLink href={child.link}>
                  {child.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default TopNavbar
