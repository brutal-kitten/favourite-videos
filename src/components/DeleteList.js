import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteList extends Component {

  static propTypes = {
    deleteList: PropTypes.func.isRequired
  }

  //calls function to delete whole list
  handleClick = (event) => {

    event.preventDefault();
    this.props.deleteList();
  }


  render() {

    return(
      <div className="deleteList" >
        <button tabIndex='0' className="buttonDeleteList" type="button" onClick={(event) => this.handleClick(event)}>Delete list</button>
      </div>
    )
  }
}

export default DeleteList;
