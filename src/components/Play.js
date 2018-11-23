import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Play extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    playVideo: PropTypes.func.isRequired,
  }

  handleClick = (event) => {

    event.preventDefault();
    this.props.playVideo(this.props.id);
  }

  render () {

    return(
      <div className="play">
        <button tabIndex='0' className="buttonPlay" type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-play-circle"></span>
        </button>
      </div>
    )
  }
}

export default Play;
