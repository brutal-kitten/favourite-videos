import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import './App.css';


class App extends Component {

  state = {
    currentId: 'hY7m5jjJ9mM',
    listOfFav: [],
    defaultList: true
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar/>
        <ListOfVideos
          defaultList={this.state.defaultList}
          listOfFav={this.state.listOfFav}
        />
      </div>
    );
  }
}

export default App;
