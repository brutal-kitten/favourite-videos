import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import NavButtons from './NavButtons';


class ListOfVideos extends Component {

  state = {
    showFavorite: false
  }

  showFavorite = () => {
    this.setState({showFavorite: true})
  }

  returnToList = () => {
    this.setState({showFavorite: false})
  }

  beforeShowDemo = () => {
    this.returnToList();
    this.props.showDemo();
  }



  render() {


    return(
      <div className="list">
        <h3>{this.props.title}</h3>
        <NavButtons
          showDemo={this.beforeShowDemo}
          showFavorite={this.showFavorite}
          deleteList={this.props.deleteList}
          sort={this.props.sort}
          showFav={this.state.showFavorite}
          returnToList={this.returnToList}
        />
        {(this.state.showFavorite === false) && (this.props.list.map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          isfavorite={item.favorite}
          removeFromFavorite={this.props.removeFromFavorite}
          fetchAgain={true}
          addToFavorite={this.props.addToFavorite}
          deleteVideo={this.props.deleteVideo}
          playVideo={this.props.playVideo}
          changeSearchResultError={this.props.changeSearchResultError}
        />
      )))}
        {(this.state.showFavorite === true) && (this.props.listOfFav.map((item) => (
        <VideoContainer
          key={item.id}
          id={item.id}
          isfavorite={true}
          removeFromFavorite={this.props.removeFromFavorite}
          fetchAgain={true}
          deleteVideo={this.props.deleteVideo}
          playVideo={this.props.playVideo}
          changeSearchResultError={this.props.changeSearchResultError}
        />
      )))}

      </div>
    )
  }
}

export default ListOfVideos;
