import React, { Component } from 'react';
import VideoContainer from './VideoContainer';



class ListOfVideos extends Component {


  render() {


    return(
      <div className="list">
        <h3>{this.props.title}</h3>
        {this.props.list.map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          fetchAgain={true}
          addToFavorive={this.props.addToFavorive}
          deleteVideo={this.props.deleteVideo}
          playVideo={this.props.playVideo}
          changeSearchResultError={this.props.changeSearchResultError}
        />
      ))}

      </div>
    )
  }
}

export default ListOfVideos;
