import React, { Component } from 'react';

class ElementsPerPagePicker extends Component {

  //calls function thet recalculate and set new state (elementsPerPage, startIndex, totalPages) in Pagination component
  handleChange = (event) => {

    event.preventDefault();
    this.props.setIndexes(event.target.value);
  }



  render() {

    return (
      <div className="elementsPerPagePicker">
        <span className="pickerText">Elements on page</span>
        <select tabindex='0' id="selectNumber" value={this.props.elementsPerPage} onChange={(event) => this.handleChange(event)}>
          <option value="10">10</option>
          <option value="8">8</option>
          <option value="6">6</option>
          <option value="4">4</option>
          <option value="2">2</option>
        </select>
      </div>
    )
  }
}

export default ElementsPerPagePicker;
