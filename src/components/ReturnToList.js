import React, { Component } from 'react';

class ReturnToList extends Component {

  //calls function that shows user the full list instead of favorites
  handleClick = (event) => {

    event.preventDefault();
    this.props.returnToList();
  }

  render () {

    return(
      <div className="showFav" >
        <button tabindex='0' className="buttonReturnToList" type="button" onClick={(event) => this.handleClick(event)}>Return to list</button>
      </div>
    )
  }
}

export default ReturnToList;
