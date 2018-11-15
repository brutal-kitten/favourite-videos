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

  addToList = (videoObject) => {

    let list = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoObject.id)).length < 1) {
      list.push(videoObject);

      this.setList(list);
      this.setState({recalculatePages: true});
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
    this.setState({recalculatePages: true});
  }


  changeSearchResultError = (changeTo) => {

    this.setState({searchResultError: changeTo});
  }


  showDemo = () => {

    let list = this.sortArray(this.state.demolist, this.state.sortBy);
    this.setState({listOfVideo: list});
  }


  deleteList = () => {

    localStorage.removeItem('list');
    this.setState({listOfVideo : []} );
    this.setState({recalculatePages: true});

  }

  sort = (value) => {
    console.log(value);
    this.setList(this.state.listOfVideo, value);
    this.setState({sortBy: value});
  }

  sortArray = (list, sortBy) => {

    console.log("inSort");
    console.log(this.state.sortBy);
    console.log(sortBy);
    if (sortBy === "new") {
      let sortedlist = list.sort((first, second) => this.sortByNewest(first, second));
      console.log(sortedlist);
      return sortedlist;
    } else {
      let sortedlist = list.sort((first, second) => this.sortByOldest(first, second));
      console.log(sortedlist);
      return sortedlist;
    }
  }

  sortByNewest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a > b) ?  -1 : 1;
  }


  sortByOldest = (first, second) => {

    let a = Date.parse(first.date);
    let b = Date.parse(second.date);
    return (a > b) ?  1 : -1;
  }


  setList = (array, sortBy=this.state.sortBy) => {

    let list = this.sortArray(array, sortBy);
    localStorage.setItem('list', JSON.stringify(list));
    console.log(list);
    this.setState({listOfVideo: list});
  }


  recalculatePagesSetFalse = () => {

    this.setState({recalculatePages: false});
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
