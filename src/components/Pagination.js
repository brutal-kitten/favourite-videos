import React, { Component } from 'react';
import ListOfVideos from './ListOfVideos'
import PaginationBox from './PaginationBox'

class Pagination extends Component {


  state = {
    showFav: false,
    startIndex: 0,
    elementsPerPage: 10,
    totalPages: 1,
    currentPage: 1
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

    let length = this.filterList(this.props.listOfVideo).length;
    let totalPagesNumber = this.calculateTotalPagesNumber(length, number);
    this.setState({elementsPerPage: number, startIndex: 0, totalPages: totalPagesNumber});
  }


  setStartIndex = (currentPage) => {
    if (currentPage === 1 ) {
      this.setState({startIndex : 0, currentPage: currentPage });
    } else {
      let currentMinusOne = currentPage - 1;
      let index = parseInt(this.state.elementsPerPage, 10)*(currentMinusOne);
      this.setState({startIndex : index, currentPage: currentPage});
    }
  }


  calculateTotalPagesNumber = (length, number) => {

    return (length % number === 0) ? (length / number) : (parseInt(length / number) + 1);
  }


  createList = (list) => {

    let filteredList = this.filterList(list);
    let start = parseInt(this.state.startIndex, 10);
    let number = parseInt(this.state.elementsPerPage, 10);
    let finish =  start + number;
    let slicedList = filteredList.slice(start, finish);
    return slicedList;
  }


  filterList = (list) => {

    let filteredList = (this.state.showFav ? (list.filter(item => (item.favorite === true))) : list);
    return filteredList;
  }

  componentDidUpdate () {
    if(this.props.recalculatePages === true) {
      let length = this.filterList(this.props.listOfVideo).length;
      let start = parseInt(this.state.startIndex, 10);
      let elPerPage =  parseInt(this.state.elementsPerPage, 10);
      let totalPagesNumber = this.calculateTotalPagesNumber(length, elPerPage);
      //if an item was deleted
      if (start >= length) {
        let startIndex = elPerPage*(totalPagesNumber - 1);
        this.setState({totalPages: totalPagesNumber, startIndex: startIndex, currentPage: totalPagesNumber});
        this.props.recalculatePagesSetFalse();
      } else if (totalPagesNumber > this.state.totalPages) {
            this.setState({totalPages: totalPagesNumber});
            this.props.recalculatePagesSetFalse();
          } else if (length === 0){
            this.setState({totalPages: 0, currentPage: 1, startIndex: 0});
            this.props.recalculatePagesSetFalse();
          }
      }

  }


  render () {

    return (
      <div className="page">
      <PaginationBox
        setIndexes={this.setIndexes}
        totalPages={this.state.totalPages}
        setStartIndex={this.setStartIndex}
        elementsPerPage={this.state.elementsPerPage}
        currentPage={this.state.currentPage}
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
