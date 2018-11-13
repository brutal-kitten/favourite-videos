import React, { Component } from 'react';
import ListOfVideos from './ListOfVideos'
import PaginationBox from './PaginationBox'

class Pagination extends Component {


  state = {
    showFav: false
  }


  showFavorite = () => {

    this.setState({showFav: true});
  }


  returnToList = () => {

    this.setState({showFav: false})
  }


  beforeShowDemo = () => {

    this.props.showDemo();
    this.setState({showFav: false});
  }


  render () {

    return (
      <div className="page">
      <ListOfVideos
        showDemo={this.beforeShowDemo}
        deleteList={this.props.deleteList}
        showFavorite={this.showFavorite}
        showFav={this.state.showFav}
        returnToList={this.returnToList}
        sort={this.props.sort}
        list={this.props.listOfVideo}
        addToFavorite={this.props.addToFavorite}
        removeFromFavorite={this.props.removeFromFavorite}
        deleteVideo={this.props.deleteVideo}
        playVideo={this.props.playVideo}
        changeSearchResultError={this.props.changeSearchResultError}
      />

      </div>
    )
  }
}

export default Pagination
