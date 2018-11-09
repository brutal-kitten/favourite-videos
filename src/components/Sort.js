import React, { Component } from 'react';

class Sort extends Component {

  state = {
    value: 'old'
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.sort();
  }
  render() {
    return(
      <div className="sort" >
        <span className="sortText">Sort by</span>
        <select id="select" value={this.state.value} onChange={(event) => this.handleChange(event)}>
          <option value="new">Newest added</option>
          <option value="old">Oldest added</option>
        </select>
      </div>
    )
  }
}

export default Sort;
