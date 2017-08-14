import React, { Component } from 'react'

import './footer.sass'

class Footer extends Component {
  static year = moment().format('YYYY')

  render() {
    return (
      <footer className="text-center py-15">
        Copyright © {Footer.year}. All rights reserved Designed By
        <span className="brand brand-space-left">
          <span>Albert</span>
          <span>Sabaté</span>
        </span>
      </footer>
    )
  }
}

export default Footer
