import React, { Component } from 'react';
import YouTube from 'react-youtube';


class ShowVideo extends Component {


  render () {

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default ShowVideo
