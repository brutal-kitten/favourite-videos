import React, { Component } from 'react';

class Delete extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteVideo(this.props.id);
  }

  render() {
    return(
      <div className="delete" >
        <button type="button" onClick={(event) => this.handleClick(event)} >Delete</button>
      </div>
    )
  }
}

export default Delete;
