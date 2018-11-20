import React, { Component } from 'react';


class PreviousPage extends Component {

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
        <button onClick={(event) => this.handleChange(event)}>
        Previous Page
        </button>
      </div>
    )
  }
}

export default PreviousPage
