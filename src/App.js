import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite videos </h1>
        </header>
        <Searchbar/>
      </div>
    );
  }
}

export default App;
