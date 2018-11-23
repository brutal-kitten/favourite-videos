import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveFromFavorite extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    removeFromFavorite: PropTypes.func.isRequired,
    trigger: PropTypes.func.isRequired,
  }

  handleClick = (event) => {

    event.preventDefault();
    this.props.removeFromFavorite(this.props.id);
    this.props.trigger();
  }

  render () {

    return(
      <div className="removeFromFav" >
        <button tabIndex='0' className="buttonRemoveFromFav" type="button" onClick={(event) => this.handleClick(event)}>
          <span className="glyphicon glyphicon-star"></span>
        </button>
      </div>
    )
  }
}

export default RemoveFromFavorite;
