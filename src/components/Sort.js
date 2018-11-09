import React, { Component } from 'react';

class Sort extends Component {

  state = {
    value: 'no'
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.sort(event.target.value);
  }
  render() {
    return(
      <div className="sort" >
        <span className="sortText">Sort by</span>
        <select id="select" value={this.state.value} onChange={(event) => this.handleChange(event)}>
          <option value="no">Not sorted</option>
          <option value="new">Newest added</option>
          <option value="old">Oldest added</option>
        </select>
      </div>
    )
  }
}

export default Sort;
