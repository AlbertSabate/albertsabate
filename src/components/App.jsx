import React from 'react'

import Header from './header/header'
import Nav from './nav/nav'
import Footer from './footer/footer'
import About from './about/about'
import Skills from './skills/skills'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'

const App = () => (
  <div className="container-fluid">
    <Nav />
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
)

export default App
