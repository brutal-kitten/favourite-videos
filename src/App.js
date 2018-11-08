import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ListOfVideos from './components/ListOfVideos'
import videoOf10 from './Default10Videos';
import NavButtons from './components/NavButtons';
import './App.css';



class App extends Component {

  state = {
    listOfVideo: [],
    listOfFav: [],
    demolist: videoOf10,
    showDefaultList: false,
    showFavoriteList: false,
    showList: true,
    searchResultError: false,
    currentSearchId: '',

  }

  addToList = (videoID) => {
    let listOfVideos = this.state.listOfVideo;
    if (this.state.listOfVideo.filter(item => (item.id === videoID)).length < 1) {
      listOfVideos.push({id: videoID, favorite: false});
      console.log(listOfVideos);
      localStorage.setItem('list', JSON.stringify(listOfVideos));
      this.setState({listOfVideo: listOfVideos});
    };
  }

  addToFavorive = (videoID) => {
    let list = this.state.listOfVideo.filter(item => (item.id !== videoID));
    list.push({id: videoID, favorite: true});
    localStorage.setItem('list', JSON.stringify(list));
    this.setState({listOfVideo: list});
    this.createArrayFav();
    console.log(this.state.listOfFav);
  }

  deleteVideo = (videoID) => {
    let listOfVideos = this.state.listOfVideo.filter(item => (item.id !== videoID));
    localStorage.setItem('list', JSON.stringify(listOfVideos));
    this.setState({listOfVideo: listOfVideos});
    this.createArrayFav();
  }


  createArrayFav = () => {
    let arrayFav = this.state.listOfVideo.filter(item => (item.favorite === true));
    this.setState({listOfFav: arrayFav});
  }

  changeSearchResultError = (changeTo) => {
    this.setState({searchResultError: changeTo});
  }

  setCurrentSearchId = (id) => {
    this.setState({currentSearchId: id});
  }

  showDemo = () => {
    this.setState({showDefaultList: true, showFavoriteList: false, showList: false});
  }

  deleteList = () => {
    localStorage.removeItem('list');
    this.setState({listOfVideo : [] , showList: true, showDefaultList: false, showFavoriteList: false} );
  }

  showFavorite = () => {
    console.log("Show fav");
  }

  sort = () => {
    console.log("Sort");
  }

  componentDidMount(){
    const cachedList = localStorage.getItem('list');
    if (cachedList) {
      this.setState({listOfVideo: JSON.parse(cachedList)});
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
          showDemo={this.showDemo}
          showList={this.showList}
          showFav={this.showFav}
        />
        <div className="search-video-result">
          {this.state.searchResultError === true && (
          <p>There is no such video</p>
          )}
        </div>
        <NavButtons
          showDemo={this.showDemo}
          showFavorite={this.showFavorite}
          deleteList={this.deleteList}
          sort={this.sort}
        />
        {this.state.showList && (
          <ListOfVideos
            title={"My list"}
            list={this.state.listOfVideo}
            addToFavorive={this.addToFavorive}
            deleteVideo={this.deleteVideo}
            playVideo={this.props.playVideo}
            changeSearchResultError={this.changeSearchResultError}
          />
        )}
        {this.state.showDefaultList && (
          <ListOfVideos
            title={"Demolist"}
            list={this.state.demolist}
            addToFavorive={this.addToFavorive}
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
