import React, { Component } from 'react'

import './contact.sass'

class Contact extends Component {
  static contacts = [
    {
      icon: 'phone',
      title: 'CALL ME',
      link: 'tel:+34688908886',
      label: '(+34) 688 908 886',
    }, {
      icon: 'envelope',
      title: 'MAIL',
      link: 'mailto:albert@sabatemartinez.com?Subject=Hello',
      label: 'albert@sabatemartinez.com',
    },
  ]

  render() {
    return (
      <section className="contact py-15">
        <div className="container">
          <div className="row justify-content-around">
            {Contact.contacts.map(contact => (
              <div key={`contact-${contact.icon}`} className="col-3 text-center">
                <i className={`fa fa-${contact.icon}`} />
                <h3>{contact.title}</h3>
                <a href={contact.link}>{contact.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
