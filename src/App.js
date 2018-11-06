import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import './App.css';
import SearchResult from './components/SearchResult'



class App extends Component {

  state = {
    listOfFav: [],
    showDefaultList: false,
    showFavoriteList: true,
    showSearchResult: false,
    currentSearchId: ''
  }

  addToFavorive = (videoID) => {
    let favoriteVideo = this.state.listOfFav;
    if (this.state.listOfFav.filter(item => (item.id === videoID)).length < 1) {
      favoriteVideo.push({id: videoID});
      console.log(favoriteVideo);
      localStorage.setItem('fav', JSON.stringify(favoriteVideo));
      this.setState({listOfFav: favoriteVideo});
    };
  }

  deleteVideo = (videoID) => {
    let favoriteVideo = this.state.listOfFav.filter(item => (item.id !== videoID));
    localStorage.setItem('fav', JSON.stringify(favoriteVideo));
    this.setState({listOfFav: favoriteVideo});
  }

  changeShowSearchResult = (changeTo) => {
    this.setState({showSearchResult: changeTo});
  }

  setCurrentSearchId = (id) => {
    this.setState({currentSearchId: id});
  }

  componentDidMount(){
    const cachedList = localStorage.getItem('fav');
    if (cachedList) {
      this.setState({listOfFav: JSON.parse(cachedList)});
    };
  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar
          addToFavorive={this.addToFavorive}
          deleteVideo={this.deleteVideo}
          changeShowSearchResult={this.changeShowSearchResult}
          setCurrentSearchId={this.setCurrentSearchId}
        />
        <div className="search-video-result">
          {this.state.showSearchResult === true && (
            <SearchResult
              key={this.state.currentSearchId}
              id={this.state.currentSearchId}
              addToFavorive={this.addToFavorive}
              deleteVideo={this.deleteVideo}
            />
          )
          }
        </div>
        <ListOfVideos
          defaultList={this.state.showDefaultList}
          listOfFav={this.state.listOfFav}
          addToFavorive={this.addToFavorive}
          favoriteList={this.state.showFavoriteList}
          deleteVideo={this.deleteVideo}
        />
      </div>
    );
  }
}

export default App;
