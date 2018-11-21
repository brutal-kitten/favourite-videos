import React, { Component } from 'react';


class NextPage extends Component {

  handleChange = (event) => {

    event.preventDefault();
    console.log("nextPage")
    let newPage = parseInt(this.props.currentPage, 10) + 1;
    if (newPage <= parseInt(this.props.totalPages, 10)) {
      this.props.setStartIndex(newPage);
    }
  }

  render () {

    return (
      <div className="nextPage">
        <button onClick={(event) => this.handleChange(event)}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </button>
      </div>
    )
  }
}

export default NextPage
