import React, { Component } from 'react';
import ElementsPerPagePicker from './ElementsPerPagePicker';
import PageInformation from './PageInformation';

class PaginationBox extends Component {

  render() {

    return (
      <div className="paginationBox">
        <ElementsPerPagePicker setIndexes={this.props.setIndexes} />
        <PageInformation />
      </div>
    )
  }
}

export default PaginationBox;
