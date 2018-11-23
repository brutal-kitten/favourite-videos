import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowDemo extends Component {

  static propTypes = {
    showDemo: PropTypes.func.isRequired
  }

  handleClick = (event) => {

    event.preventDefault();
    this.props.showDemo();
  }


  render () {

    return(
      <div className="showDemo" >
        <button tabIndex='0' className="buttonShowDemo" type="button" onClick={(event) => this.handleClick(event)}>Show demolist</button>
      </div>
    )
  }
}

export default ShowDemo;
