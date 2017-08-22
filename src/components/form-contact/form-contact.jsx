import React, { Component } from 'react'
import { Container, Row, Col, Alert, Button, Form, FormGroup, Input } from 'reactstrap';


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
      <section id="form-contact" className="form-contact">
        <Container className="text-center py-15">
          <h1>SAY HELLO</h1>
          <h4 className="pt-5 pb-10">Ready to keep in touch with me for amazing things?</h4>
          <Form className="pt-5">
            <Row>
              <Col xs="4">
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    onChange={e => this.onChange(e, 'name')}
                  />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    onChange={e => this.onChange(e, 'email')}
                  />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="I'm writting for ..."
                    onChange={e => this.onChange(e, 'subject')}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="textarea"
                  placeholder="Hi! I'm contacting you for ..."
                  onChange={e => this.onChange(e, 'message')}
                />
              </Col>
            </Row>
            {this.state.showMessage ? (
              <Row className="pt-5">
                <Col>
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
                </Col>
              </Row>
            ) : (
              <Row className="pt-5">
                <Col>
                  <Button color="primary" onClick={this.sendForm}>SEND</Button>
                </Col>
              </Row>
            )}
          </Form>
        </Container>
      </section>
    )
  }
}

export default FormContact
