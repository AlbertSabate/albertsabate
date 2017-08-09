import React, { Component } from 'react'

import addEvent from '../../helpers/add-event'

import './header.sass'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowHeight: 0,
    }
  }

  componentWillMount() {
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
          dfg
        </div>
      </header>
    )
  }
}

export default Header
