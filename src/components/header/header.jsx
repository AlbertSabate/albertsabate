import React, { Component } from 'react'

import addEvent from '../../helpers/add-event'
import getNavbarHeight from '../../helpers/get-navbar-height'

import './header.sass'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowHeight: 0,
    }

    this.goDown = this.goDown.bind(this)
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

  goDown() {
    window.scroll({
      top: this.getHeaderHeight() - getNavbarHeight(),
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <header style={{ height: this.getHeaderHeight() }}>
        <div className="header-layout">
          <div role="button" tabIndex={0} className="go-down text-center" onClick={this.goDown}>
            <i className="fa fa-3x fa-angle-double-down" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
