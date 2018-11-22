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
    sortBy : "new",
    recalculatePages: false
  }

  //if there is no such item in array, add it to array
  addToList = (videoObject) => {

    let list = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoObject.id)).length < 1) {
      list.push(videoObject);
      this.setList(list);
      this.setState({recalculatePages: true});
    };
  }

  //change the favorite attribute on true in object with given id
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
  }

  //change the favorite attribute on false in object with given id
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
  }

  //set new array without item with given id
  deleteVideo = (videoID) => {

    let list = this.state.listOfVideo.filter(item => (item.id !== videoID));
    this.setList(list);
    this.setState({recalculatePages: true});
  }


  changeSearchResultError = (changeTo) => {

    this.setState({searchResultError: changeTo});
  }

  //sort and set demolist as listOfVideo in state
  showDemo = () => {

    this.setList(this.state.demolist);
  }


  deleteList = () => {

    localStorage.removeItem('list');
    this.setState({listOfVideo : []} );
    this.setState({recalculatePages: true});

  }

  //sort list and set new state
  sort = (value) => {
    this.setList(this.state.listOfVideo, value);
    this.setState({sortBy: value});
  }

  //take array and parameter for sorting, returns sorted array
  sortArray = (list, sortBy) => {

    if (sortBy === "new") {
      let sortedlist = list.sort((first, second) => this.sortByNewest(first, second));
      return sortedlist;
    } else {
      let sortedlist = list.sort((first, second) => this.sortByOldest(first, second));
      return sortedlist;
    }
  }

  //sort by newest date
  sortByNewest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a > b) ?  -1 : 1;
  }

  //sort by oldest date
  sortByOldest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a > b) ?  1 : -1;
  }

  // sort given array, set item in local storage, set new state
  setList = (array, sortBy=this.state.sortBy) => {

    let list = this.sortArray(array, sortBy);
    localStorage.setItem('list', JSON.stringify(list));
    this.setState({listOfVideo: list});
  }


  recalculatePagesSetFalse = () => {

    this.setState({recalculatePages: false});
  }

  //check if there is array in local storage from previous time
  componentDidMount() {

    const cachedList = localStorage.getItem('list');
    if (cachedList) {
      let list = this.sortArray(JSON.parse(cachedList));
      this.setState({listOfVideo: list});
    };
  };


  render () {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Make a list of your favorite videos</h1>
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
          recalculatePages={this.state.recalculatePages}
          recalculatePagesSetFalse={this.recalculatePagesSetFalse}
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
