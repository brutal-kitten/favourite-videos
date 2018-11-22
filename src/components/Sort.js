import React, { Component } from 'react';

class Sort extends Component {

  state = {
    value: 'new'
  }

  //calls function that sorts item by oldest/newest added and change own state to new value
  handleChange = (event) => {

    event.preventDefault();
    this.props.sort(event.target.value);
    this.setState({value: event.target.value});
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
