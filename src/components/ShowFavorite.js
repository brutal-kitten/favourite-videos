import React, { Component } from 'react';

class ShowFavorite extends Component {

  //calls function that change state in Pagination
  handleClick = (event) => {

    event.preventDefault();
    this.props.showFavorite();
  }

  render() {
    return(
      <div className="showFav" >
        <button tabindex='0' className="buttonShowFav" type="button" onClick={(event) => this.handleClick(event)}>Show favorite</button>
      </div>
    )
  }
}

export default ShowFavorite;
