import React, { Component } from 'react';


class PreviousPage extends Component {

  //if there is previous page calls function that recalculate and set state (startIndex, currentPage) in Pagination component
  //if there isn't previous page user stays at the same page
  handleChange = (event) => {

    event.preventDefault();
    console.log("previousPage")
    let newPage = parseInt(this.props.currentPage, 10) - 1;
    if (newPage > 0) {
      this.props.setStartIndex(newPage);
    }
  }

  render () {

    return (
      <div className="previousPage">
        <button tabindex='0' className="buttonPreviousPage" onClick={(event) => this.handleChange(event)}>
          <span className="glyphicon glyphicon-chevron-left"></span>
        </button>
      </div>
    )
  }
}

export default PreviousPage
