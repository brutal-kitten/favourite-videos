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

  isFavriteCheck = (id) => {
    console.log(id);
    let array = this.props.listOfFav.filter((item) => (item.id === id));
    console.log(array);
    if (array.length > 0) {
      return true;
    } else return false;
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
          title={item.title}
          date={item.date}
          views={item.views}
          likes={item.likes}
          thumbnails={item.thumbnails}
          isfavorite={this.isFavriteCheck(item.id)}
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
            title={item.title}
            date={item.date}
            views={item.views}
            likes={item.likes}
            thumbnails={item.thumbnails}
            isfavorite={this.isFavriteCheck(item.id)}
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
