import React, { Component } from 'react';
import VideoContainer from './VideoContainer';

class SearchResult extends Component {

  

  render() {

    return (
      <div className="searchResult">
      <VideoContainer
        id={this.props.id}
      />
      </div>
    )
  }

}

export default SearchResult;
