import React, { Component } from 'react';
import ShowVideo from './ShowVideo';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

  render() {

    if(this.props.showModal) {
      return ReactDOM.createPortal(
        <ShowVideo
          videoId={this.props.videoId}
          closeModal={this.props.closeModal}
        />,
        modalRoot);
    } else return null;
  }
}

export default Modal
