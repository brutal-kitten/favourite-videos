import React, { Component } from 'react';

class AddFav extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.addToFavorite(this.props.id);
    this.props.trigger();

  }

  render() {
    return(
      <div className="addFav" >
        <button  className="buttonAddFav" type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-star-empty"></span></button>
      </div>
    )
  }
}

export default AddFav;
