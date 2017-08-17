import React, { Component } from 'react'
import { ButtonGroup, Button } from 'reactstrap';

import addEvent from '../../helpers/add-event'
import goTo from '../../helpers/go-to'

import './header.sass'

class Header extends Component {
  static goDown() {
    goTo('about')
  }

  static goPortfolio() {
    goTo('portfolio')
  }

  static goContact() {
    goTo('contact')
  }

  constructor(props) {
    super(props)

    this.state = {
      windowHeight: 0,
    }
  }

  componentDidMount() {
    this.setHeaderHeight()

    addEvent(window, 'resize', () => {
      this.setHeaderHeight()
    })
  }

  setHeaderHeight() {
    this.setState({
      windowHeight: window.innerHeight,
    })
  }

  getHeaderHeight() {
    return this.state.windowHeight
  }

  render() {
    return (
      <header style={{ height: this.getHeaderHeight() }}>
        <div className="header-layout text-center">
          <div className="header-title p-10">
            <h1>
              <span>JAVASCRIPT</span>
              <span>DEVELOPER</span>
            </h1>
            <ButtonGroup className="mt-5">
              <Button color="primary" className="btn-inverse mr-5" onClick={Header.goPortfolio}>
                PORTFOLIO
              </Button>
              <Button color="secondary" className="btn-inverse" onClick={Header.goContact}>
                CONTACT
              </Button>
            </ButtonGroup>
          </div>
          <div role="button" tabIndex={0} className="go-down" onClick={Header.goDown}>
            <i className="fa fa-3x fa-angle-double-down" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
