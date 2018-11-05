import React, { Component } from 'react';

class AddFav extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.addToFavorive(this.props.id);
  }

  render() {
    return(
      <div className="addFav" >
        <button onClick={(event) => this.handleClick(event)}>Add to favorite</button>
      </div>
    )
  }
}

export default AddFav;
