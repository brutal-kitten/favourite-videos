import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import VideoContainer from './components/VideoContainer';
import './App.css';

class App extends Component {

  state = {
    currentId: 'hY7m5jjJ9mM'
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
        <VideoContainer
          id={this.state.currentId}
        />
      </div>
    );
  }
}

export default App;
