import React, { Component } from 'react';

class PageInformation extends Component {

  state = {
    currentPage: 1,
  }

  handleChange = (event) => {

    event.preventDefault();
    console.log(event.target.value);
    this.setState({currentPage: event.target.value});
  }


  render () {

    return (
      <div className="pageInfo">
        <div className="pageInput"><input type="number" value={this.state.currentPage} onChange={(event) => this.handleChange(event)}/></div>
        <div className="totalPage">of</div>
        <span className="totalPagesNumber">{this.props.totalPages}</span>
      </div>
    )
  }
}

export default PageInformation
