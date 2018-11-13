import React, { Component } from 'react';
import ElementsPerPagePicker from './ElementsPerPagePicker';

class PaginationBox extends Component {

  render() {

    return (
      <div className="paginationBox">
        <ElementsPerPagePicker />
      </div>
    )
  }
}

export default PaginationBox;
