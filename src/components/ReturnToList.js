import React, { Component } from 'react';

class ReturnToList extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.returnToList();
  }

  render() {
    return(
      <div className="showFav" >
        <button className="buttonReturnToList" type="button" onClick={(event) => this.handleClick(event)}>Return to list</button>
      </div>
    )
  }
}

export default ReturnToList;
