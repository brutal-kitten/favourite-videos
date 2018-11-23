import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Picture extends Component {

  static propTypes = {
    thumbnails: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    playVideo: PropTypes.func.isRequired

  }

  handleClick = (event) => {

    event.preventDefault();
    this.props.playVideo(this.props.id);
  }

  render () {

    return(
      <div className="pic grid-item" >
        <img tabIndex='0' src={this.props.thumbnails} alt="thumbnail" onClick={(event) => this.handleClick(event)} />
      </div>
    )
  }
}

export default Picture;
