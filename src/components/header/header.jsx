import React, { Component } from 'react'

import Albert from '../../assets/img/albert-min.jpeg'

class Header extends Component {
  render() {
    return (
      <header>
        <img src={Albert} alt="Albert Sabaté" />
      </header>
    )
  }
}

export default Header
