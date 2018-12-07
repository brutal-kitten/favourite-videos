import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowFavorite extends Component {

  static propTypes = {
    showFavorite: PropTypes.func.isRequired
  }

  //calls function that change state in Pagination
  handleClick = (event) => {

    event.preventDefault();
    this.props.showFavorite();
  }

  render() {
    return(
      <div className="showFav" >
        <button tabIndex='0' className="buttonShowFav" type="button" onClick={(event) => this.handleClick(event)}>Show favourite</button>
      </div>
    )
  }
}

export default ShowFavorite;
