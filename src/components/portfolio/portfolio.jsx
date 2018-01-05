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
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      ID: 2,
      img: BigfiniteImg,
      title: 'Bigfinite',
      subtitle: 'ReactJS & NodeJS Developer',
      href: 'https://www.bigfinite.com/',
      link: 'www.bigfinite.com',
    }, {
      ID: 3,
      img: SmartCommerceImg,
      title: 'Smart Commerce',
      subtitle: 'PHP & AngularJS Developer',
      href: 'http://www.smartcommerce.co/',
      link: 'www.smartcommerce.co',
    }, {
      ID: 4,
      img: SocialAndLoyalImg,
      title: 'Social & Loyal',
      subtitle: 'Lead Developer',
      href: 'https://www.socialandloyal.com/',
      link: 'www.socialandloyal.com',
    }, {
      ID: 5,
      img: BabImg,
      title: 'BAB Software',
      subtitle: 'FullStack Developer',
      href: 'https://www.wearebab.com/',
      link: 'www.wearebab.com',
    }, {
      ID: 6,
      img: ElCafeDeLaPlataImg,
      title: 'el Café de la Plata',
      subtitle: 'Freelancer',
      href: 'https://elcafedelaplata.net/',
      link: 'elcafedelaplata.net',
      description: 'Lorem Ipsum blablabla',
      skills: ['PHP', 'HTML', 'CSS', 'JS'],
      highlights: ['highlights', 'responsabilities'],
      images: [elcafe1, elcafe2, elcafe3],
    }, /* {
      ID: 7,
      img: DjBenMartinImg,
      title: 'Dj Ben Martin',
      subtitle: 'Freelancer',
    }, */ {
      ID: 8,
      img: GooltrackingImg,
      title: 'Gooltracking',
      subtitle: 'Freelancer',
      href: 'https://web.gooltracking.com/',
      link: 'web.gooltracking.com',
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
