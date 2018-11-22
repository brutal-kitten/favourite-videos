import React, { Component } from 'react';

class ShowDemo extends Component {

  handleClick = (event) => {

    event.preventDefault();
    this.props.showDemo();
  }


  render () {

    return(
      <div className="showDemo" >
        <button className="buttonShowDemo" type="button" onClick={(event) => this.handleClick(event)}>Show demolist</button>
      </div>
    )
  }
}

export default ShowDemo;
