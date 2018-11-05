import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import './App.css';

const favoriteVideo = [];

class App extends Component {

  state = {
    listOfFav: [],
    defaultList: true
  }

  addToFavorive = (videoID) => {
    favoriteVideo.push({id: videoID});
    console.log(favoriteVideo);
    this.setState({listOfFav: favoriteVideo});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar
          addToFavorive={this.addToFavorive}
        />
        <ListOfVideos
          defaultList={this.state.defaultList}
          listOfFav={this.state.listOfFav}
          addToFavorive={this.addToFavorive}
        />
      </div>
    );
  }
}

export default App;
