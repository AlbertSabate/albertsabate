import React from 'react';
import PropTypes from 'prop-types'
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';

class ModalPortfolio extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    toggle: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array,
    skills: PropTypes.array,
    highlights: PropTypes.array,
  }

  static defaultProps = {
    isOpen: false,
    className: 'modal-portfolio',
    toggle: () => {},
    title: '',
    subtitle: '',
    description: '',
    images: [],
    skills: [],
    highlights: [],
  }

  render() {
    const {
      isOpen,
      toggle,
      className,
      title,
      subtitle,
      description,
      images,
      skills,
      highlights,
    } = this.props

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} className={className} size="lg">
          <ModalHeader toggle={toggle}>{subtitle} @ {title}</ModalHeader>
          <ModalBody>
            <Row className="modal-images">
              {images.map(image => (
                <Col xs="4" key={image}>
                  <div><img src={image} alt={title} /></div>
                </Col>
              ))}
            </Row>
            <ul className="modal-skills">
              {skills.map(skill => (
                <li key={skill}><Badge color="secondary">{skill}</Badge></li>
              ))}
            </ul>
            <h5>Project Description</h5>
            <Row>
              <Col className="pl-8 mb-5" dangerouslySetInnerHTML={{ __html: description }} />
            </Row>
            <h5>Highlights & Responsibilities</h5>
            <ul>
              {highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalPortfolio
