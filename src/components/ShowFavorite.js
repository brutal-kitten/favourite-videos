import React, { Component } from 'react';

class ShowFavorite extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.showFavorite();
  }

  render() {
    return(
      <div className="showFav" >
        <button className="buttonShowFav" type="button" onClick={(event) => this.handleClick(event)}>Show favorite</button>
      </div>
    )
  }
}

export default ShowFavorite;
