import React, { Component } from 'react'

import addEvent from '../../helpers/add-event'
import goTo from '../../helpers/go-to'

import './header.sass'

class Header extends Component {
  static goDown() {
    goTo('about')
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
        <div className="header-layout">
          <div role="button" tabIndex={0} className="go-down text-center" onClick={Header.goDown}>
            <i className="fa fa-3x fa-angle-double-down" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
