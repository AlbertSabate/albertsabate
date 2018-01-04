import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText,
  CardBody, CardTitle, CardSubtitle } from 'reactstrap'

import InteractiusImg from '../../assets/img/portfolio/interactius/logo.png'
import AlberTenezImg from '../../assets/img/portfolio/albertenez/albertenez.svg'
import BabImg from '../../assets/img/portfolio/bab/bab.svg'
import SocialAndLoyalImg from '../../assets/img/portfolio/socialandloyal/socialandloyal.png'
import SmartCommerceImg from '../../assets/img/portfolio/smartcommerce/smartcommerce.png'
import ElCafeDeLaPlataImg from '../../assets/img/portfolio/elcafedelaplata/elcafedelaplata.svg'
import DjBenMartinImg from '../../assets/img/portfolio/djbenmartin/benMartin.svg'
import GooltrackingImg from '../../assets/img/portfolio/gooltracking/gooltracking.png'

import './portfolio.sass'

class Portfolio extends Component {
  static data = [
    {
      img: InteractiusImg,
      title: 'Interactius UX',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: SmartCommerceImg,
      title: 'Smart Commerce',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: SocialAndLoyalImg,
      title: 'Social & Loyal',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: BabImg,
      title: 'BAB Software',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: ElCafeDeLaPlataImg,
      title: 'el Café de la Plata',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: AlberTenezImg,
      title: 'Alber Tenez',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: DjBenMartinImg,
      title: 'Dj Ben Martin',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    }, {
      img: GooltrackingImg,
      title: 'Gooltracking',
      subtitle: 'lorem ipsum',
      desc: 'lorem ipsum lorem ipsum lorem ipsum',
    },
  ]

  render() {
    let count = 0

    return (
      <section id="portfolio" className="portfolio">
        <Container className="py-15">
          <Row>
            {Portfolio.data.map((work) => {
              count += 1

              return (
                <Col xs="6" md="3" key={`portolio-card-${count}`}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={work.img}
                      alt={work.title}
                    />
                    <CardBody>
                      <CardTitle>{work.title}</CardTitle>
                      <CardSubtitle>{work.subtitle}</CardSubtitle>
                      <CardText>
                        {work.desc}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    )
  }
}

export default Portfolio
