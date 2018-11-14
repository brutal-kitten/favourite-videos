import React, { Component } from 'react';

class ElementsPerPagePicker extends Component {

  state = {
    value: 10
  }

  handleChange = (event) => {

    event.preventDefault();
    console.log(event.target.value);
    this.setState({value: event.target.value});
    this.props.setIndexes(event.target.value);
  }



  render() {

    return (
      <div className="elementsPerPagePicker">
        <span className="pickerText">Elements on page</span>
        <select id="selectNumber" value={this.state.value} onChange={(event) => this.handleChange(event)}>
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
