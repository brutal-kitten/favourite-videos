import React, { Component } from 'react';
import ShowVideo from './ShowVideo';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

  static propTypes = {
    videoId: PropTypes.string.isRequired,
    closeModal:  PropTypes.func.isRequired
  }

  render() {

    let node = this.props.modalRoot ? this.props.modalRoot : modalRoot;

    if(this.props.showModal) {
      return ReactDOM.createPortal(
        <ShowVideo
          videoId={this.props.videoId}
          closeModal={this.props.closeModal}
        />,
        node);
    } else return null;
  }
}

export default Modal
