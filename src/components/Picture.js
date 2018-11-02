import React, { Component } from 'react';

class Picture extends Component {

  render() {
    return(
      <div className="img" >
        <img src={this.props.thumbnails} alt="cover picture of video" />
      </div>
    )
  }
}

export default Picture;
