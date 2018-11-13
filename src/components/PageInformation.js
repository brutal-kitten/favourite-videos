import React, { Component } from 'react';

class PageInformation extends Component {

  state = {
    currentPage: 1,
  }

  render () {

    return (
      <div className="pageInfo">
        <div className="pageInput"><input type="number" value={this.state.currentPage} /></div>    
        <div className="totalPage">of</div>
        <span className="totalPageNumber">1</span>
      </div>
    )
  }
}

export default PageInformation
