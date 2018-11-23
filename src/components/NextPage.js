import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextPage extends Component {

  static propTypes = {
    setStartIndex: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
  }

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
        <button tabIndex='0' className="buttonNextPage" onClick={(event) => this.handleChange(event)}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </button>
      </div>
    )
  }
}

export default NextPage
