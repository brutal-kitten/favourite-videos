import React, { Component } from 'react';
import VideoContainer from './VideoContainer';

class SearchResult extends Component {



  render() {

    return (
      <div className="searchResult">
      <VideoContainer
        id={this.props.id}
        fetchAgain={true}
        addToFavorive={this.props.addToFavorive}
        deleteVideo={this.props.deleteVideo}
        playVideo={this.props.playVideo}
      />
      </div>
    )
  }

}

export default SearchResult;
