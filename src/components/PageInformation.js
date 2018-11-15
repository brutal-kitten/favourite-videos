import React, { Component } from 'react';

class PageInformation extends Component {


  handleChange = (event) => {

    event.preventDefault();
    console.log(event.target.value);
    let newPage = parseInt(event.target.value, 10);
    let currentPage = (newPage > parseInt(this.props.totalPages, 10) || newPage === 0 || newPage === 1) ? 1 : newPage;
    this.props.setStartIndex(currentPage);
  }


  render () {

    return (
      <div className="pageInfo">
        <div className="pageText">Page</div>
        <div className="pageInput"><input id="selectPage" min="1" type="number" max={this.props.totalPages} value={this.props.currentPage} onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="totalPage">of</div>
        <span className="totalPagesNumber">{this.props.totalPages}</span>
      </div>
    )
  }
}

export default PageInformation
