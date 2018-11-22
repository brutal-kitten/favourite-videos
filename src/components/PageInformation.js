import React, { Component } from 'react';
import PreviousPage from './PreviousPage';
import NextPage from './NextPage';

class PageInformation extends Component {

  //calls function that recalculate and set state (startIndex, currentPage) in Pagination component
  handleChange = (event) => {

    event.preventDefault();
    let newPage = parseInt(event.target.value, 10);
    let currentPage = (newPage > parseInt(this.props.totalPages, 10) || newPage === 0 || newPage === 1) ? 1 : newPage;
    this.props.setStartIndex(currentPage);
  }


  render () {

    return (
      <div className="pageInfo">
        <PreviousPage
          currentPage={this.props.currentPage}
          setStartIndex={this.props.setStartIndex}
        />
        <div className="pageInput">
          <input id="selectPage" min="1" type="number" max={this.props.totalPages} value={this.props.currentPage} onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="totalPage">of</div>
        <span className="totalPagesNumber">{this.props.totalPages}</span>
        <NextPage
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          setStartIndex={this.props.setStartIndex}
        />
      </div>
    )
  }
}

export default PageInformation
