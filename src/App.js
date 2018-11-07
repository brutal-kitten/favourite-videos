import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import './App.css';



class App extends Component {

  state = {
    listOfVideo: [],
    showDefaultList: false,
    showFavoriteList: true,
    searchResultError: false,
    currentSearchId: ''
  }

  addToList = (videoID) => {
    let listOfVideos = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoID)).length < 1) {
      listOfVideos.push({id: videoID, favorite: false});
      console.log(listOfVideos);
      localStorage.setItem('list', JSON.stringify(listOfVideos));
      this.setState({listOfVideo: listOfVideos});
    };
  }

  addToFavorive = (videoID) => {

    //if (this.state.listOfFav.filter(item => (item.id === videoID)).length < 1) {
    //  favoriteVideo.push({id: videoID});
    //  console.log(favoriteVideo);
    //  localStorage.setItem('list', JSON.stringify(favoriteVideo));
    //  this.setState({listOfFav: favoriteVideo});
  //  };
  }

  deleteVideo = (videoID) => {
    let listOfVideos = this.state.listOfVideo.filter(item => (item.id !== videoID));
    localStorage.setItem('list', JSON.stringify(listOfVideos));
    this.setState({listOfVideo: listOfVideos});
  }

  changeSearchResultError = (changeTo) => {
    this.setState({searchResultError: changeTo});
  }

  setCurrentSearchId = (id) => {
    this.setState({currentSearchId: id});
  }

  componentDidMount(){
    const cachedList = localStorage.getItem('list');
    if (cachedList) {
      this.setState({listOfVideo: JSON.parse(cachedList)});
    };
  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar
          addToList={this.addToList}
          deleteVideo={this.deleteVideo}
          setCurrentSearchId={this.setCurrentSearchId}
          changeSearchResultError={this.changeSearchResultError}
        />
        <div className="search-video-result">
          {this.state.searchResultError === true && (
          <p>There is no such video</p>
          )
          }
        </div>
        <ListOfVideos
          defaultList={this.state.showDefaultList}
          listOfVideo={this.state.listOfVideo}
          addToFavorive={this.addToFavorive}
          favoriteList={this.state.showFavoriteList}
          deleteVideo={this.deleteVideo}
          changeSearchResultError={this.changeSearchResultError}
        />
      </div>
    );
  }
}

export default App;
