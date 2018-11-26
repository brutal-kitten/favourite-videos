import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFav extends Component {

  static propTypes = {
    addToFavorite: PropTypes.func.isRequired,
    trigger: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  //calls function to add item to favorites and trigger the change of button
  handleClick = (event) => {

    event.preventDefault();
    this.props.addToFavorite(this.props.id);
    this.props.trigger();

  }


  render() {

    return(
      <div className="addFav" >
        <button tabIndex='0' className="buttonAddFav" type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-star-empty"></span></button>
      </div>
    )
  }
}

export default AddFav;
