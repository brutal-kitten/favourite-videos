import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import './App.css';
import favoriteVideo from './Favorite';


class App extends Component {

  state = {
    listOfFav: favoriteVideo,
    showDefaultList: false,
    showFavoriteList: true
  }

  addToFavorive = (videoID) => {
    if (this.state.listOfFav.filter(item => (item.id === videoID)).length < 1) {
      favoriteVideo.push({id: videoID});
      console.log(favoriteVideo);
      this.setState({listOfFav: favoriteVideo});
      console.log(this.state.listOfFav);
    };
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
          defaultList={this.state.showDefaultList}
          listOfFav={this.state.listOfFav}
          addToFavorive={this.addToFavorive}
          favoriteList={this.state.showFavoriteList}
        />
      </div>
    );
  }
}

export default App;
