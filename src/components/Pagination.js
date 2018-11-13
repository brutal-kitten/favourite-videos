import React, { Component } from 'react';
import ListOfVideos from './ListOfVideos'
import PaginationBox from './PaginationBox'

class Pagination extends Component {


  state = {
    showFav: false,
    startIndex: 0,
    number: 10
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

  setIndexes = (number) => {

    this.setState({number: number, startIndex: 0});
  }

  createList = (list) => {

    let filteredList = (this.state.showFav ? (list.filter(item => (item.favorite === true))) : list);
    let start = parseInt(this.state.startIndex, 10);
    let finish =  start + parseInt(this.state.number, 10);
    let slicedList = filteredList.slice(start, finish);
    return slicedList;
  }


  render () {

    return (
      <div className="page">
      <PaginationBox
        setIndexes={this.setIndexes}
      />
      <ListOfVideos
        showDemo={this.beforeShowDemo}
        deleteList={this.props.deleteList}
        showFavorite={this.showFavorite}
        showFav={this.state.showFav}
        returnToList={this.returnToList}
        sort={this.props.sort}
        list={this.createList(this.props.listOfVideo)}
        addToFavorite={this.props.addToFavorite}
        removeFromFavorite={this.props.removeFromFavorite}
        deleteVideo={this.props.deleteVideo}
        playVideo={this.props.playVideo}
        changeSearchResultError={this.props.changeSearchResultError}
        number={this.state.number}
      />
      </div>
    )
  }
}

export default Pagination
