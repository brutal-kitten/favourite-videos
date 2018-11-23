import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import NavButtons from './NavButtons';
import PropTypes from 'prop-types';


class ListOfVideos extends Component {

  static propTypes = {
    showFav: PropTypes.bool.isRequired,
    showDemo: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    returnToList: PropTypes.func.isRequired,
    showFavorite: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    addToFavorite: PropTypes.func.isRequired,
    removeFromFavorite: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired

  }

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
        <div className="listContainer">
          {(this.props.list.map((item) => (
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
            />
          )))}
        </div>
      </div>
    )
  }
}

export default ListOfVideos;
