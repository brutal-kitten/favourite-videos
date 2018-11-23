import React, { Component } from 'react';

class DeleteList extends Component {

  //calls function to delete whole list
  handleClick = (event) => {

    event.preventDefault();
    this.props.deleteList();
  }


  render() {

    return(
      <div className="deleteList" >
        <button tabindex='0' className="buttonDeleteList" type="button" onClick={(event) => this.handleClick(event)}>Delete list</button>
      </div>
    )
  }
}

export default DeleteList;
