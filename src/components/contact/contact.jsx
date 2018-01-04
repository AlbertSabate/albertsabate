import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import './contact.sass'

class Contact extends Component {
  static contacts = [
    {
      ID: 'phone',
      icon: 'phone',
      title: 'CALL ME',
      link: 'tel:+6590841575',
      label: '(+65) 9084 1575',
    }, {
      ID: 'mail',
      icon: 'envelope',
      title: 'MAIL',
      link: 'mailto:albert@sabatemartinez.com?Subject=Hello',
      label: 'albert@sabatemartinez.com',
    },
  ]

  render() {
    return (
      <section id="contact" className="contact">
        <Container className="py-15">
          <Row className="justify-content-around">
            {Contact.contacts.map(contact => (
              <Col xs="false" md="4" key={`contact-${contact.ID}`}>
                <Row className="contact-box align-items-center">
                  <Col xs="3" className="my-2 py-2 text-right">
                    <i className={`fa fa-2x fa-${contact.icon}`} />
                  </Col>
                  <Col xs="9" className="my-2 py-2">
                    <h5>{contact.title}</h5>
                    <h6><a href={contact.link}>{contact.label}</a></h6>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
}

export default Contact
