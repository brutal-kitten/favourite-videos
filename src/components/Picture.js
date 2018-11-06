import React, { Component } from 'react';

class Picture extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.playVideo(this.props.id);
  }

  render() {
    return(
      <div className="pic grid-item" >
        <img src={this.props.thumbnails} alt="cover picture of video" onClick={(event) => this.handleClick(event)} />
      </div>
    )
  }
}

export default Picture;
