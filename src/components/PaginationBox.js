import React, { Component } from 'react';
import ElementsPerPagePicker from './ElementsPerPagePicker';
import PageInformation from './PageInformation';
import PropTypes from 'prop-types';

class PaginationBox extends Component {

  static propTypes = {
    setStartIndex: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setIndexes: PropTypes.func.isRequired,
    elementsPerPage: PropTypes.number.isRequired
  }

  render () {

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
