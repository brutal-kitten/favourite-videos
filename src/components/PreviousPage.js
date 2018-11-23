import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PreviousPage extends Component {

  static propTypes = {
    setStartIndex: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
  }

  //if there is previous page calls function that recalculate and set state (startIndex, currentPage) in Pagination component
  //if there isn't previous page user stays at the same page
  handleChange = (event) => {

    event.preventDefault();
    let newPage = parseInt(this.props.currentPage, 10) - 1;
    if (newPage > 0) {
      this.props.setStartIndex(newPage);
    }
  }

  render () {

    return (
      <div className="previousPage">
        <button tabIndex='0' className="buttonPreviousPage" onClick={(event) => this.handleChange(event)}>
          <span className="glyphicon glyphicon-chevron-left"></span>
        </button>
      </div>
    )
  }
}

export default PreviousPage
