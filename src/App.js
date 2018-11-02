import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import SearchResult from './components/SearchResult'
import './App.css';

class App extends Component {

  state = {
    currentId: 'hY7m5jjJ9mM',
    listOfFav: [],
    defaultList: []
  }

  //createURL = () => {
  //url = `https://www.googleapis.com/youtube/v3/videos?id=${this.state.currentId}&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`;
  //  return url;
  //}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar/>
        <SearchResult
          id={this.state.currentId}
        />
        <ListOfVideos
          defaultList={this.state.defaultList}
          listOfFav={this.state.listOfFav}
        />
      </div>
    );
  }
}

export default App;
