import React, { Component } from 'react';

class RemoveFromFavorite extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.removeFromFavorite(this.props.id);
  }

  render() {
    return(
      <div className="removeFromFav" >
        <button type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-star"></span></button>
      </div>
    )
  }
}

export default RemoveFromFavorite;
