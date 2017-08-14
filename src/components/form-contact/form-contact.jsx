import React, { Component } from 'react'
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';

import './form-contact.sass'

class FormContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMessage: false,
      sendIsSuccess: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }

    this.sendForm = this.sendForm.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e, key) {
    const form = {}
    form[key] = e.target.value

    this.setState({ form })
  }

  sendForm(e) {
    e.preventDefault()

    this.setState({
      showMessage: true,
      sendIsSuccess: false,
    })
  }

  render() {
    return (
      <section className="container form-contact text-center py-15">
        <h1>SAY HELLO</h1>
        <h4 className="pt-5 pb-10">Ready to keep in touch with me for amazing things?</h4>
        <Form className="pt-5">
          <div className="row">
            <div className="col-4">
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Your Name"
                  onChange={e => this.onChange(e, 'name')}
                />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <Input
                  type="email"
                  placeholder="Your Email"
                  onChange={e => this.onChange(e, 'email')}
                />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <Input
                  type="text"
                  placeholder="I'm writting for ..."
                  onChange={e => this.onChange(e, 'subject')}
                />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Input
                type="textarea"
                placeholder="Hi! I'm contacting you for ..."
                onChange={e => this.onChange(e, 'message')}
              />
            </div>
          </div>
          {this.state.showMessage ? (
            <div className="pt-5">
              {this.state.sendIsSuccess ? (
                <Alert color="success">
                  <strong>Well done!</strong> You successfully send this important message.
                </Alert>
              ) : (
                <Alert color="danger">
                  <strong>Ooops!</strong> I cannot send this important message.
                  Try later, or use a normal client to send it to [
                  <a href={`mailto:albert@sabatemartinez.com?Subject=${this.state.form.subject}`}>
                    albert@sabatemartinez.com
                  </a>
                  ]
                </Alert>
              )}
            </div>
          ) : (
            <div className="row pt-5">
              <div className="col-12">
                <Button color="primary" onClick={this.sendForm}>SEND</Button>
              </div>
            </div>
          )}
        </Form>
      </section>
    )
  }
}

export default FormContact
