import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg,
  CardBody, CardTitle, CardSubtitle } from 'reactstrap'

import ModalPortfolio from './modal'

import Klaud9Img from '../../assets/img/portfolio/klaud9/logo.svg'
import BigfiniteImg from '../../assets/img/portfolio/bigfinite/bigfinite_logo.png'
import BabImg from '../../assets/img/portfolio/bab/bab.svg'
import SocialAndLoyalImg from '../../assets/img/portfolio/socialandloyal/socialandloyal_logo.png'
import SmartCommerceImg from '../../assets/img/portfolio/smartcommerce/smartcommerce.png'
import ElCafeDeLaPlataImg from '../../assets/img/portfolio/elcafedelaplata/elcafedelaplata.svg'
// import DjBenMartinImg from '../../assets/img/portfolio/djbenmartin/benMartin.svg'
import GooltrackingImg from '../../assets/img/portfolio/gooltracking/gooltracking.png'


// K9
import k91 from '../../assets/img/portfolio/klaud9/k91.png'
import k92 from '../../assets/img/portfolio/klaud9/k92.png'
import k93 from '../../assets/img/portfolio/klaud9/k93.png'

// BF
import bf1 from '../../assets/img/portfolio/bigfinite/bf1.png'
import bf2 from '../../assets/img/portfolio/bigfinite/bf2.png'
import bf3 from '../../assets/img/portfolio/bigfinite/bf3.png'

// SC
import sc1 from '../../assets/img/portfolio/smartcommerce/sc1.png'
import sc2 from '../../assets/img/portfolio/smartcommerce/sc2.png'
import sc3 from '../../assets/img/portfolio/smartcommerce/sc3.png'

// SAL
import sal1 from '../../assets/img/portfolio/socialandloyal/sal1.jpg'
import sal2 from '../../assets/img/portfolio/socialandloyal/sal2.png'
import sal3 from '../../assets/img/portfolio/socialandloyal/sal3.png'

// BAB
import bab1 from '../../assets/img/portfolio/bab/bab1.png'
import bab2 from '../../assets/img/portfolio/bab/bab3.png'
import bab3 from '../../assets/img/portfolio/bab/bab5.png'

// GoolTracking
import gool1 from '../../assets/img/portfolio/gooltracking/gool1.png'
import gool2 from '../../assets/img/portfolio/gooltracking/gool3.png'
import gool3 from '../../assets/img/portfolio/gooltracking/gool6.png'

// El café de la plata Portfolio
import elcafe1 from '../../assets/img/portfolio/elcafedelaplata/cafe1.png'
import elcafe2 from '../../assets/img/portfolio/elcafedelaplata/cafe2.png'
import elcafe3 from '../../assets/img/portfolio/elcafedelaplata/cafe3.png'

import './portfolio.sass'

class Portfolio extends Component {
  static data = [
    {
      ID: 1,
      img: Klaud9Img,
      title: 'Klaud9',
      subtitle: 'CTO',
      href: 'https://www.klaud9.com/',
      link: 'www.klaud9.com',
      description: `<p>Asia is unique, and so are we. Today Asian stock photography lacks authentic
        photos of its unique cultures, breathtaking landscapes and beautiful people.</p>
        <p>That's why we created Klaud9, Asia's first stock photo website,  connecting local
        photographers with some of the region's leading brands. Broadcast online photo briefs or
        launch photo challenges to our thriving photographer community. To top it off, every photo
        on our marketplace is hand-selected. You'll only find the highest quality and you'll always
        find the photo you need.</p>
        <p>Spend less time searching for the perfect photo and more time on your creativity
        with Klaud9.</p>`,
      skills: [
        'NodeJS',
        'Symfony 3',
        'ReactJS',
        'Angular 4',
        'SASS',
        'JavaScript',
        'Typescript',
        'Webpack',
      ],
      highlights: ['lorem1', 'lorem2'],
      images: [k91, k92, k93],
    }, {
      ID: 2,
      img: BigfiniteImg,
      title: 'Bigfinite',
      subtitle: 'ReactJS & NodeJS Developer',
      href: 'https://www.bigfinite.com/',
      link: 'www.bigfinite.com',
      description: `<p>Providing simple solutions to complex needs in biotech and pharma.</p>
        <p>Our goal is to be the global partner in providing simple solutions to the analysis and
        control complex needs of industrial processes in Biotech and Pharma, covering all the
        supply chain, from R+D to patient dispensing. By offering a SAAS application for industrial
        use, under the philosophy of “internet of things”, that can be quickly implemented, without
        having to adapt or change the currently existing systems and with a customer ROI under six
        months. With efficiency, collaboration, interdisciplinary, joy, respect, transparency &
        commitment.</p>`,
      skills: ['NodeJS', 'ReactJS', 'SASS', 'JavaScript', 'jQuery', 'Webpack'],
      highlights: ['lorem1', 'lorem2'],
      images: [bf1, bf2, bf3],
    }, {
      ID: 3,
      img: SmartCommerceImg,
      title: 'Smart Commerce',
      subtitle: 'PHP & AngularJS Developer',
      href: 'http://www.smartcommerce.co/',
      link: 'www.smartcommerce.co',
      description: `<p>SmartCommerce (formerly Carritus) empowers marketing teams at CPG brands like
        P&G, Unilever and Nestle to own and drive their customers' buying experience.</p>
        <p>SmartCommerce's SmartCart lets shoppers find the brand's products anywhere - the brand's
        ecommerce pages, website, social media, email, ads, influencer blogs, and more - and simply
        choosing their preferred retailer for fulfillment. Complete control of a brand's online
        presence stays where it should be - with the brand.</p>
        <p>SmartLink from SmartCommerce gives brands actionable insights and answers
        (not piles of data!) when they're looking to build purchase velocity.</p>
        <p>Easily see and control:</p>
        <ul>
          <li>how your product is merchandised at retailer and influencer partners</li>
          <li>where competitors are gaining or losing ground</li>
          <li>where untapped distribution opportunities could be seized</li>
          <li>and more.</li>
        </ul>
        <p>SmartCommerce services are scalable to work with brands of virtually any size, across
        Europe, North America, and South America. We would love to help your CPG brand drive
        success in 2016 and beyond.</p>
        <p>“2016 could be an inflection point for grocery e-commerce. A Morgan Stanley consumer survey
        found that 26% of online shoppers expect to buy groceries online in 2016, up from only 8%
        who said they planned to do so a year ago.” – AdAge</p>
        <p>Let's get ahead of this, together.</p>
        <p>Launched in Spain, SmartCommerce now has an international presence including three offices
        across the US.</p>`,
      skills: [
        'PhalconPHP',
        'AngularJS 1 & 2',
        'SASS',
        'JavaScript',
        'TypeScript',
        'jQuery',
        'Grunt',
      ],
      highlights: ['lorem1', 'lorem2'],
      images: [sc1, sc2, sc3],
    }, {
      ID: 4,
      img: SocialAndLoyalImg,
      title: 'Social & Loyal',
      subtitle: 'Lead Developer',
      href: 'https://www.socialandloyal.com/',
      link: 'www.socialandloyal.com',
      description: `<p>Social&Loyal is a SaaS based omnichannel loyalty platform that allows
        companies to attract, engage and retain consumers. Our technology allows marketers to create
        and manage a new generation of loyalty programs in which consumers are rewarded for any
        action they take that generates value to the company (purchase on/off line, conduct surveys,
        invite friends, answer quiz games, follow the company on different social networks, give
        contact information, etc). All done in a gamified way to enhance engagement to unexpected
        levels.</p>
        <p>Our interactive loyalty programs promote daily interaction so that the brands will be
        constantly in the top of mind of their consumers to motivate purchases. Rewarding consumers
        for every purchase also motivates purchase repetition rates. Our especially designed games
        also help companies to educate consumers, promote their products and viralize content
        through social networks. Finally, for every interaction, the platform gathers relevant
        information about consumers in order to help companies to personalize marketing
        efforts.</p>`,
      skills: [
        'CakePHP',
        'HTML',
        'SASS',
        'JavaScript',
        'jQuery',
        'AJAX',
        'Social Media API',
        'Grunt',
      ],
      highlights: ['lorem1', 'lorem2'],
      images: [sal1, sal2, sal3],
    }, {
      ID: 5,
      img: BabImg,
      title: 'BAB Software',
      subtitle: 'FullStack Developer',
      href: 'https://www.wearebab.com/',
      link: 'www.wearebab.com',
      description: `<p>BAB as a technological partner for your business is to ensure you have a
        robust, sustainable and evolving project. 13 years helping to create, develop and grow
        business on the Internet with a 360º service: Strategy, Design and Development, and Digital
        Marketing.</p>
        <ul>
          <li>Prototyping and interactive graphic design</li>
          <li>Technological solutions</li>
          <li>Training</li>
          <li>Support and continued technical assistance</li>
          <li>Reduced production and implementation times</li>
          <li>Customized and scalable hosting solutions</li>
        </ul>
        <p>We provide COMITIUM our own CMS creative and flexible solutions to manage with great
        safety large volumes of contents and large audiences, be it a Digital Diary, an e-Commerce,
        an App...</p>
        <p>BAB. We convert good ideas into profitable businesses.</p>`,
      skills: ['Symfony 2', 'PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
      highlights: ['lorem1', 'lorem2'],
      images: [bab1, bab2, bab3],
    }, {
      ID: 6,
      img: GooltrackingImg,
      title: 'Gooltracking',
      subtitle: 'Freelancer',
      href: 'https://web.gooltracking.com/',
      link: 'web.gooltracking.com',
      description: `<p>It is a company with almost 20 years of experience in the field of digital
        mapping and Geographic Information Systems (GIS). The GoolTracking platform represents the
        synthesis of all our knowledge and experience achieved along these years!</p>
        <p>GoolTracking is a communication platform, management and online analysis, fully
        scalable and customizable according to the specific needs and features of each client.</p>`,
      skills: ['Google Maps', 'JavaScript', 'jQuery', 'Prototype', 'PHP', 'AJAX', 'HTML', 'CSS'],
      highlights: ['lorem1', 'lorem2'],
      images: [gool1, gool2, gool3],
    }, {
      ID: 7,
      img: ElCafeDeLaPlataImg,
      title: 'el Café de la Plata',
      subtitle: 'Freelancer',
      href: 'https://elcafedelaplata.net/',
      link: 'elcafedelaplata.net',
      description: `<p>el Café de la Plata was my first project when I was freelance, actually I
        continue developing that, because Paco, his manager, is amazing. The webpage is for a
        restaurant in Sitges - Barcelona, is a really easy webpage.</p>
        <p>We are planning update the design this year, because looks bit old,
        It already has 4 years.</p>`,
      skills: ['PHP', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
      highlights: ['lorem1', 'lorem2'],
      images: [elcafe1, elcafe2, elcafe3],
    },
  ]

  constructor(props) {
    super(props)

    const states = {}
    Portfolio.data.forEach((d) => {
      states[`modal-${d.ID}`] = false
    })

    this.state = states
  }

  toggleModal(id) {
    const state = {}
    state[`modal-${id}`] = !this.state[`modal-${id}`]

    this.setState(state)
  }

  render() {
    return (
      <section id="portfolio" className="portfolio">
        <Container className="py-15">
          <h1 className="text-center mb-8">PORTFOLIO</h1>
          <Row>
            {Portfolio.data.map(work => (
              <Col xs="6" md="3" key={`portolio-card-${work.ID}`}>
                <Card onClick={() => this.toggleModal(work.ID)}>
                  <div className="card-image">
                    <CardImg
                      top
                      width="100%"
                      src={work.img}
                      alt={work.title}
                    />
                  </div>
                  <CardBody className="mb-5">
                    <CardTitle>{work.title}</CardTitle>
                    <CardSubtitle>
                      <span className="text-primary">{work.subtitle}</span>
                    </CardSubtitle>
                  </CardBody>
                  <div className="card-icon text-secondary">
                    <i className="fa fa-2x fa-search" />
                  </div>
                </Card>
                <ModalPortfolio
                  isOpen={this.state[`modal-${work.ID}`]}
                  toggle={() => this.toggleModal(work.ID)}
                  title={work.title}
                  subtitle={work.subtitle}
                  description={work.description}
                  skills={work.skills}
                  highlights={work.highlights}
                  images={work.images}
                  link={work.link}
                  href={work.href}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
}

export default Portfolio
