import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReturnToList extends Component {

  static propTypes = {
    returnToList: PropTypes.func.isRequired
  }

  //calls function that shows user the full list instead of favorites
  handleClick = (event) => {

    event.preventDefault();
    this.props.returnToList();
  }

  render () {

    return(
      <div className="returnToList" >
        <button tabIndex='0' className="buttonReturnToList" type="button" onClick={(event) => this.handleClick(event)}>Return to list</button>
      </div>
    )
  }
}

export default ReturnToList;
