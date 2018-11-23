import React, { Component } from 'react';
import ShowDemo from './ShowDemo';
import DeleteList from './DeleteList';
import ShowFavorite from './ShowFavorite'
import Sort from './Sort'
import ReturnToList from './ReturnToList';
import PropTypes from 'prop-types';

class NavButtons extends Component {

  static propTypes = {
    showFav: PropTypes.bool.isRequired,
    showDemo: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    returnToList: PropTypes.func.isRequired,
    showFavorite: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired
  }

  render() {

    return (
      <div className="navButtons grid-container2" >
        <ShowDemo showDemo={this.props.showDemo} />
        <DeleteList deleteList={this.props.deleteList} />
        {this.props.showFav ? (
          <ReturnToList returnToList={this.props.returnToList} />
        ) : (
          <ShowFavorite showFavorite={this.props.showFavorite} />
        )}
        <Sort sort={this.props.sort} />
     </div>
    )
  }
}
export default NavButtons;
