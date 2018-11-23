import React, { Component } from 'react';

class Delete extends Component {

  //calls function to delete video by id
  handleClick = (event) => {

    event.preventDefault();
    this.props.deleteVideo(this.props.id);
  }


  render() {

    return(
      <div className="delete" >
        <button tabindex='0' className="buttonDelete" type="button" onClick={(event) => this.handleClick(event)} >
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </div>
    )
  }
}

export default Delete;
