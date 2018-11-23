import React, { Component } from 'react';
import YouTube from 'react-youtube';


class ShowVideo extends Component {

  handleClick = (event) => {

    event.preventDefault();
    this.props.closeModal();
  }

  render () {

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return(
      <div className="window">
        <button tabindex='0' type="button"  className="closeModal" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default ShowVideo
