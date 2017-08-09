import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopNavbar extends Component {
  static brand = 'Albert Sabaté'
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
      isOpen: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">{TopNavbar.brand}</NavbarBrand>
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
      </nav>
    )
  }
}

export default TopNavbar
