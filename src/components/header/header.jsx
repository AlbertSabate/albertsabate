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
    let countDV = 0
    let countJS = 0

    return (
      <header style={{ height: this.getHeaderHeight() }}>
        <div className="header-layout text-center">
          <div className="header-title">
            <h1>
              {'JAVASCRIPT'.split('').map((letter) => {
                countJS += 1

                return (
                  <span className={`header-js header-js-${countJS}`} key={`header-js-${countJS}`}>
                    {letter}
                  </span>
                )
              })}
              &nbsp;
              {'DEVELOPER'.split('').map((letter) => {
                countDV += 1

                return (
                  <span className={`header-dv header-dv-${countDV}`} key={`header-dv-${countDV}`}>
                    {letter}
                  </span>
                )
              })}
            </h1>
          </div>
          <div role="button" tabIndex={0} className="go-down" onClick={Header.goDown} onKeyPress={Header.goDown}>
            <i className="fa fa-3x fa-angle-double-down" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
