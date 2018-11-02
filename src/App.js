import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import SearchResult from './components/SearchResult'
import './App.css';


class App extends Component {

  state = {
    currentId: 'hY7m5jjJ9mM',
    listOfFav: [],
    defaultList: true,
    showSearchResult: false
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar/>
        {this.state.showSearchResult && (
          <SearchResult
            id={this.state.currentId}
          />
        )}
        <ListOfVideos
          defaultList={this.state.defaultList}
          listOfFav={this.state.listOfFav}
        />
      </div>
    );
  }
}

export default App;
