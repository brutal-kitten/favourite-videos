import React, { Component } from 'react';

class Delete extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteVideo(this.props.id);
  }

  render() {
    return(
      <div className="delete" >
        <button className="buttonDelete" type="button" onClick={(event) => this.handleClick(event)} >
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </div>
    )
  }
}

export default Delete;
