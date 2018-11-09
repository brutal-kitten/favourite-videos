import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import videoOf10 from './Default10Videos';
import './App.css';



class App extends Component {

  state = {
    listOfVideo: [],
    listOfFav: [],
    demolist: videoOf10,
    searchResultError: false,
    currentSearchId: '',
    showList: true

  }

  addToList = (videoObject) => {
    let listOfVideos = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoObject.id)).length < 1) {
      listOfVideos.push(videoObject);
      localStorage.setItem('list', JSON.stringify(listOfVideos));
      this.setState({listOfVideo: listOfVideos});
    };
  }

  addToFavorite = (videoID) => {
    let list = this.state.listOfFav;
    if(list.filter(item => (item.id === videoID)).length < 1) {
      let videoObj = this.state.listOfVideo.filter(item => (item.id === videoID));
      list.push(videoObj[0]);
      localStorage.setItem('fav', JSON.stringify(list));
      console.log("just added to favorite");
      this.setState({listOfFav: list});
    }
  }


  removeFromFavorite = (videoID) => {
    let list = this.state.listOfFav.filter(item => (item.id !== videoID));
    localStorage.setItem('fav', JSON.stringify(list));
    console.log(" just remove  from favorite");
    this.setState({listOfFav: list});

  }

  deleteVideo = (videoID) => {
    let listOfVideos = this.state.listOfVideo.filter(item => (item.id !== videoID));
    localStorage.setItem('list', JSON.stringify(listOfVideos));
    this.setState({listOfVideo: listOfVideos});
    this.removeFromFavorite(videoID);
  }


  changeSearchResultError = (changeTo) => {
    this.setState({searchResultError: changeTo});
    this.setState({showList: true});
  }

  setCurrentSearchId = (id) => {
    this.setState({currentSearchId: id});
  }

  showDemo = () => {
    this.setState({listOfVideo: this.state.demolist});
  }

  deleteList = () => {
    localStorage.removeItem('list');
    this.setState({listOfVideo : []} );
    localStorage.removeItem('fav');
    this.setState({listOfFav : []} );
  }

  sort = (value) => {
    console.log(value);
    let list = this.state.listOfVideo;
    let listOfFav = this.state.listOfFav;
    if (value === 'new') {
      list.sort((first, second) => this.sortByNewest(first, second));
      listOfFav.sort((first, second) => this.sortByNewest(first, second));
      this.setState({listOfVideo: list, listOfFav: listOfFav});
    } else if (value === 'old') {
      list.sort((first, second) => this.sortByOldest(first, second));
      listOfFav.sort((first, second) => this.sortByOldest(first, second));
      this.setState({listOfVideo: list, listOfFav: listOfFav});
    };
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

  componentDidMount(){
    const cachedList = localStorage.getItem('list');
    const cachedFav = localStorage.getItem('fav');
    if (cachedList) {
      this.setState({listOfVideo: JSON.parse(cachedList)});
    };
    if (cachedFav) {
      this.setState({listOfFav: JSON.parse(cachedFav)});
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
          deleteVideo={this.deleteVideo}
          setCurrentSearchId={this.setCurrentSearchId}
          changeSearchResultError={this.changeSearchResultError}
        />
        <div className="search-video-result">
          {this.state.searchResultError === true && (
          <p>There is no such video</p>
          )}
        </div>
        {this.state.showList && (
          <ListOfVideos
            showDemo={this.showDemo}
            deleteList={this.deleteList}
            sort={this.sort}
            title={"My list"}
            list={this.state.listOfVideo}
            listOfFav={this.state.listOfFav}
            addToFavorite={this.addToFavorite}
            removeFromFavorite={this.removeFromFavorite}
            deleteVideo={this.deleteVideo}
            playVideo={this.props.playVideo}
            changeSearchResultError={this.changeSearchResultError}
          />
        )}
      </div>
    );
  }
}

export default App;
