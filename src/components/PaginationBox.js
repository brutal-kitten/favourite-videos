import React, { Component } from 'react';
import ElementsPerPagePicker from './ElementsPerPagePicker';
import PageInformation from './PageInformation';

class PaginationBox extends Component {

  render() {

    return (
      <div className="paginationBox">
        <ElementsPerPagePicker
          setIndexes={this.props.setIndexes}
          elementsPerPage={this.props.elementsPerPage}
        />
        <PageInformation
          totalPages={this.props.totalPages}
          setStartIndex={this.props.setStartIndex}
          currentPage={this.props.currentPage}
        />
      </div>
    )
  }
}

export default PaginationBox;
