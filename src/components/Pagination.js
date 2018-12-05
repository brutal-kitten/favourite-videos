import React, { Component } from 'react';
import ListOfVideos from './ListOfVideos';
import PaginationBox from './PaginationBox';
import PropTypes from 'prop-types';

class Pagination extends Component {

  static propTypes = {
    recalculatePages: PropTypes.bool.isRequired,
    recalculatePagesSetFalse: PropTypes.func.isRequired,
    showDemo: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    listOfVideo: PropTypes.array.isRequired,
    addToFavorite: PropTypes.func.isRequired,
    removeFromFavorite: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired
  }

  state = {
    showFav: false,
    startIndex: 0,
    elementsPerPage: 10,
    totalPages: 1,
    currentPage: 1
  }

  //reculculate and set new state - favorites always starts from 1st page
  showFavorite = () => {

    let total = this.calculateTotalPagesNumber(
      this.props.listOfVideo.filter(item => (item.favorite === true)).length, this.state.elementsPerPage);
      this.setState({showFav: true, startIndex: 0, currentPage: 1, totalPages: total});
  }

  //change state so user will see all list instead of favorite
  returnToList = () => {

    this.setState({showFav: false})
  }

  //calls function that show demolist and change state so user will see full list
  beforeShowDemo = () => {

    this.props.showDemo();
    this.setState({showFav: false});
  }

  //calculate length of list and  with given number of items per page recalculate number of total pages and set new state
  setIndexes = (number) => {

    let length = this.filterList(this.props.listOfVideo).length;
    let totalPagesNumber = this.calculateTotalPagesNumber(length, number);
    this.setState({
      elementsPerPage: number,
      startIndex: 0,
      totalPages: totalPagesNumber,
      currentPage: 1});
  }

  //with given new current page reculculate start index and set new state
  setStartIndex = (currentPage) => {

    if (currentPage === 1 ) {
      this.setState({startIndex : 0, currentPage: currentPage });
    } else {
      let currentMinusOne = currentPage - 1;
      let index = parseInt(this.state.elementsPerPage, 10)*(currentMinusOne);
      this.setState({startIndex : index, currentPage: currentPage});
    }
  }

  //with given length of array and number of items per page calculate and return total number of page
  calculateTotalPagesNumber = (length, number) => {

    return (length % number === 0) ? (length / number) : (parseInt(length / number) + 1);
  }

  //create array of items for showing on curren page
  createList = (list) => {

    let filteredList = this.filterList(list);
    let start = parseInt(this.state.startIndex, 10);
    let number = parseInt(this.state.elementsPerPage, 10);
    let finish =  start + number;
    let slicedList = filteredList.slice(start, finish);
    return slicedList;
  }

  //return full array or only favorites - depends on state
  filterList = (list) => {

    let filteredList = (this.state.showFav ? (list.filter(item => (item.favorite === true))) : list);
    return filteredList;
  }

  checkForUpdate () {
    let length = this.filterList(this.props.listOfVideo).length;
    let start = parseInt(this.state.startIndex, 10);
    let elPerPage =  parseInt(this.state.elementsPerPage, 10);
    let totalPagesNumber = this.calculateTotalPagesNumber(length, elPerPage);

    //when user delete all items in array
    if (length === 0) {
      this.setState({totalPages: 1, currentPage: 1, startIndex: 0, elementsPerPage: 10});
      this.props.recalculatePagesSetFalse();
      } else if (start >= length) {
       // when user delete item and it was last item on the carrent page
       // and now user shoud see previous page
          let startIndex = elPerPage*(totalPagesNumber - 1);
          this.setState({totalPages: totalPagesNumber, startIndex: startIndex, currentPage: totalPagesNumber});
          this.props.recalculatePagesSetFalse();
        } else if (totalPagesNumber > this.state.totalPages) {
            //when user add item or items
            this.setState({totalPages: totalPagesNumber});
            this.props.recalculatePagesSetFalse();
        }
  }

  /* each time user delete item or add new item or delete full list recalculate
   and set information about current page, total pages number, startIndex */
  componentDidUpdate () {

    if (this.props.recalculatePages === true) {
      this.checkForUpdate();
    };
  }

  render () {

    return(
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
