import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import videoOf10 from '../Default10Videos';

class ListOfVideos extends Component {




  render() {
    return(
      <div className="list">
      <h3>Your list of videos</h3>
      {this.props.defaultList && (videoOf10.map((item) => (
        <VideoContainer
          id={item.id}
          key={item.id}
          fetchAgain={true}
          addToFavorive={this.props.addToFavorive}
          deleteVideo={this.props.deleteVideo}
          playVideo={this.props.playVideo}
        />
        )))
      }
      {this.props.favoriteList && (this.props.listOfFav.map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          fetchAgain={true}
          addToFavorive={this.props.addToFavorive}
          deleteVideo={this.props.deleteVideo}
          playVideo={this.props.playVideo}
          changeSearchResultError={this.props.changeSearchResultError}
        />
      ))
      )}

      </div>
    )
  }
}

export default ListOfVideos;
