import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Pagination from './components/Pagination'
import videoOf10 from './Default10Videos';
import './App.css';



class App extends Component {

  state = {
    listOfVideo: [],
    demolist: videoOf10,
    searchResultError: false,
    sortBy : "new"

  }

  addToList = (videoObject) => {

    let list = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoObject.id)).length < 1) {
      list.push(videoObject);

      this.setList(list);
      console.log("new list of video");
    };
  }


  addToFavorite = (videoID) => {

    let list = this.state.listOfVideo.map(function (item) {
      if (item.id === videoID) {
        item.favorite = true;
        return item;
      } else {
        return item;
     }
   });

    this.setList(list);
    console.log("just added to favorite");
  }


  removeFromFavorite = (videoID) => {

    let list = this.state.listOfVideo.map(function (item) {
      if (item.id === videoID) {
        item.favorite = false;
        return item;
      } else {
        return item;
     }
   });

    this.setList(list);
    console.log(" just remove  from favorite");
  }


  deleteVideo = (videoID) => {

    let list = this.state.listOfVideo.filter(item => (item.id !== videoID));
    this.setList(list);
  }


  changeSearchResultError = (changeTo) => {

    this.setState({searchResultError: changeTo});
  }


  showDemo = () => {

    let list = this.sortArray(this.state.demolist);
    this.setState({listOfVideo: list});
  }


  deleteList = () => {

    localStorage.removeItem('list');
    this.setState({listOfVideo : []} );

  }

  sort = (value) => {

    this.setState({sortBy: value});
    this.sortArray();
  }

  sortArray = (list) => {


    if (this.state.sortBy === 'new') {
      list.sort((first, second) => this.sortByNewest(first, second));
    } else if (this.state.sortBy === 'old') {
      list.sort((first, second) => this.sortByOldest(first, second));
    };
    return list;
  }

  sortByNewest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a > b) ?  -1 : 1;
  }


  sortByOldest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a < b) ?  -1 : 1;
  }


  setList = (array) => {

    let list = this.sortArray(array);
    localStorage.setItem('list', JSON.stringify(list));
    this.setState({listOfVideo: list});
  }


  componentDidMount() {

    const cachedList = localStorage.getItem('list');
    if (cachedList) {
      let list = this.sortArray(JSON.parse(cachedList));
      this.setState({listOfVideo: list});
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
          changeSearchResultError={this.changeSearchResultError}
        />
        <div className="search-video-result">
          {this.state.searchResultError === true && (
          <p>There is no such video</p>
          )}
        </div>
          <Pagination
            showDemo={this.showDemo}
            deleteList={this.deleteList}
            sort={this.sort}
            listOfVideo={this.state.listOfVideo}
            addToFavorite={this.addToFavorite}
            removeFromFavorite={this.removeFromFavorite}
            deleteVideo={this.deleteVideo}
            playVideo={this.props.playVideo}
            changeSearchResultError={this.changeSearchResultError}
          />
      </div>
    )
  }
}

export default App;
