import React, { Component } from 'react';

class Sort extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.sort();
  }

  render() {
    return(
      <div className="sort" >
        <button type="button" onClick={(event) => this.handleClick(event)}>Sort</button>
      </div>
    )
  }
}

export default Sort;
