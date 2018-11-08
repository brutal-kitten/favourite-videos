import React, { Component } from 'react';
import ShowDemo from './ShowDemo';
import DeleteList from './DeleteList';
import ShowFavorite from './ShowFavorite'
import Sort from './Sort'

class NavButtons extends Component {
  render() {

    return (
      <div className="navButtons grid-container2">
        <ShowDemo
          showDemo={this.props.showDemo}
        />
        <DeleteList
          deleteList={this.props.deleteList}
        />
        <ShowFavorite
          showFavorite={this.props.showFavorite}
        />
        <Sort
          sort={this.props.sort}
        />
      </div>
    )
  }
}
export default NavButtons;
