import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import videoOf10 from '../Default10Videos';

class ListOfVideos extends Component {




  render() {
    return(
      <div className="list">
      {this.props.defaultList && (videoOf10.map((item) => (
        <VideoContainer
          id={item.id}
          key={item.id}
          fetchAgain={true}
          addToFavorive={this.props.addToFavorive}
        />
        )))
      }
      {this.props.showFavoriteList && (this.props.listOfFav.map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          fetchAgain={true}
          addToFavorive={this.props.addToFavorive}
        />
      ))
      )}

      </div>
    )
  }
}

export default ListOfVideos;
