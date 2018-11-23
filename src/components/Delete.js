import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Delete extends Component {

  static propTypes = {
    deleteVideo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  //calls function to delete video by id
  handleClick = (event) => {

    event.preventDefault();
    this.props.deleteVideo(this.props.id);
  }


  render() {

    return(
      <div className="delete" >
        <button tabIndex='0' className="buttonDelete" type="button" onClick={(event) => this.handleClick(event)} >
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </div>
    )
  }
}

export default Delete;
