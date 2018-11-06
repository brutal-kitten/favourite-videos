import React, { Component } from 'react';

class Play extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.playVideo(this.props.id);
  }

  render() {
    return(
      <div className="play" >
        <button type="button" onClick={(event) => this.handleClick(event)}>Play</button>
      </div>
    )
  }
}

export default Play;
