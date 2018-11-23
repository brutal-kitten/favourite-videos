import React, { Component } from 'react';

class Play extends Component {

  handleClick = (event) => {

    event.preventDefault();
    this.props.playVideo(this.props.id);
  }

  render () {

    return(
      <div className="play">
        <button tabindex='0' className="buttonPlay" type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-play-circle"></span>
        </button>
      </div>
    )
  }
}

export default Play;
