import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg,
  CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

import ModalPortfolio from './modal'

import Klaud9Img from '../../assets/img/portfolio/klaud9/logo.svg'
import BigfiniteImg from '../../assets/img/portfolio/bigfinite/bigfinite_logo.png'
import BabImg from '../../assets/img/portfolio/bab/bab.svg'
import SocialAndLoyalImg from '../../assets/img/portfolio/socialandloyal/socialandloyal.jpg'
import SmartCommerceImg from '../../assets/img/portfolio/smartcommerce/smartcommerce.png'
import ElCafeDeLaPlataImg from '../../assets/img/portfolio/elcafedelaplata/elcafedelaplata.svg'
// import DjBenMartinImg from '../../assets/img/portfolio/djbenmartin/benMartin.svg'
import GooltrackingImg from '../../assets/img/portfolio/gooltracking/gooltracking.png'

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
      href: 'https://www.klaud9.com/',
      subtitle: 'www.klaud9.com',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      ID: 2,
      img: BigfiniteImg,
      title: 'Bigfinite',
      href: 'https://www.bigfinite.com/',
      subtitle: 'www.bigfinite.com',
    }, {
      ID: 3,
      img: SmartCommerceImg,
      title: 'Smart Commerce',
      href: 'http://www.smartcommerce.co/',
      subtitle: 'www.smartcommerce.co',
    }, {
      ID: 4,
      img: SocialAndLoyalImg,
      title: 'Social & Loyal',
      href: 'https://www.socialandloyal.com/',
      subtitle: 'www.socialandloyal.com',
    }, {
      ID: 5,
      img: BabImg,
      title: 'BAB Software',
      href: 'https://www.wearebab.com/',
      subtitle: 'www.wearebab.com',
    }, {
      ID: 6,
      img: ElCafeDeLaPlataImg,
      title: 'el Café de la Plata',
      href: 'https://elcafedelaplata.net/',
      subtitle: 'elcafedelaplata.net',
      description: 'Lorem Ipsum blablabla',
      skills: ['PHP', 'HTML', 'CSS', 'JS'],
      highlights: ['highlights', 'responsabilities'],
      images: [elcafe1, elcafe2, elcafe3],
    }, /* {
      ID: 7,
      img: DjBenMartinImg,
      title: 'Dj Ben Martin',
      subtitle: 'lorem ipsum',
    }, */ {
      ID: 8,
      img: GooltrackingImg,
      title: 'Gooltracking',
      href: 'https://web.gooltracking.com/',
      subtitle: 'web.gooltracking.com',
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
                <Card>
                  <div className="card-image">
                    <CardImg
                      top
                      width="100%"
                      src={work.img}
                      alt={work.title}
                    />
                  </div>
                  <CardBody>
                    <CardTitle>{work.title}</CardTitle>
                    <CardSubtitle>
                      <a rel="noopener noreferrer" target="_blank" href={work.href}>{work.subtitle}</a>
                    </CardSubtitle>
                    <Button color="primary" onClick={() => this.toggleModal(work.ID)}>
                      <i className="fa fa-search" />
                    </Button>
                  </CardBody>
                </Card>
                <ModalPortfolio
                  isOpen={this.state[`modal-${work.ID}`]}
                  toggle={() => this.toggleModal(work.ID)}
                  title={work.title}
                  description={work.description}
                  skills={work.skills}
                  highlights={work.highlights}
                  images={work.images}
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
