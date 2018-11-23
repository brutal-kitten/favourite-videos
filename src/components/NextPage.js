import React, { Component } from 'react';


class NextPage extends Component {

  //if there is next page calls function that recalculate and set state (startIndex, currentPage) in Pagination component
  //if there isn't nest page user stays at the same page
  handleChange = (event) => {

    event.preventDefault();
    let newPage = parseInt(this.props.currentPage, 10) + 1;
    if (newPage <= parseInt(this.props.totalPages, 10)) {
      this.props.setStartIndex(newPage);
    }
  }

  render () {

    return (
      <div className="nextPage">
        <button tabindex='0' className="buttonNextPage" onClick={(event) => this.handleChange(event)}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </button>
      </div>
    )
  }
}

export default NextPage
