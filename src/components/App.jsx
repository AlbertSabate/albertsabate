import React from 'react'

import Header from './header/header'
import TopNavbar from './top-navbar/top-navbar'
import Footer from './footer/footer'
import About from './about/about'
import Skills from './skills/skills'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'
import FormContact from './form-contact/form-contact'

const App = () => (
  <div>
    <TopNavbar />
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <FormContact />
    <Footer />
  </div>
)

export default App
