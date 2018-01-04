import React from 'react';
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalPortfolio extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    toggle: PropTypes.func,
    title: PropTypes.string,
    // data: PropTypes.object,
  }

  static defaultProps = {
    isOpen: false,
    className: 'modal-portfolio',
    toggle: () => {},
    title: '',
    // data: {},
  }

  render() {
    const {
      isOpen,
      toggle,
      className,
      title,
    } = this.props

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} className={className} size="lg">
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
