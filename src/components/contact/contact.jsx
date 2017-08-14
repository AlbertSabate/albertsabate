import React, { Component } from 'react'

import './contact.sass'

class Contact extends Component {
  static contacts = [
    {
      ID: 'phone',
      icon: 'phone',
      title: 'CALL ME',
      link: 'tel:+34688908886',
      label: '(+34) 688 908 886',
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
      <section className="contact py-12">
        <div className="container">
          <div className="row justify-content-around">
            {Contact.contacts.map(contact => (
              <div key={`contact-${contact.ID}`} className="col-md-4">
                <div className="contact-box row align-items-center">
                  <div className="col-3 my-2 py-2 text-right">
                    <i className={`fa fa-2x fa-${contact.icon}`} />
                  </div>
                  <div className="col-9 my-2 py-2">
                    <h5>{contact.title}</h5>
                    <h6><a href={contact.link}>{contact.label}</a></h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
