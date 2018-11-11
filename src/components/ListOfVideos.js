import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import NavButtons from './NavButtons';


class ListOfVideos extends Component {



  render() {

    return (
      <div className="list">
        <h3>My list</h3>
        <NavButtons
          showDemo={this.props.showDemo}
          showFavorite={this.props.showFavorite}
          deleteList={this.props.deleteList}
          sort={this.props.sort}
          showFav={this.props.showFav}
          returnToList={this.props.returnToList}
        />
        {(this.props.showFav ? (this.props.list.filter(item => (item.favorite === true))) : this.props.list).map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          views={item.views}
          likes={item.likes}
          thumbnails={item.thumbnails}
          isfavorite={item.favorite}
          removeFromFavorite={this.props.removeFromFavorite}
          addToFavorite={this.props.addToFavorite}
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
