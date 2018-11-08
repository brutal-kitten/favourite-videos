import React, { Component } from 'react';
import ShowDemo from './ShowDemo';
import DeleteList from './DeleteList';
import ShowFavorite from './ShowFavorite'
import Sort from './Sort'
import ReturnToList from './ReturnToList'

class NavButtons extends Component {
  render() {

    return (
      <div className="navButtons" >
      {(this.props.showFav === false) && (
      <div className="grid-container2">
        <ShowDemo
          showDemo={this.props.showDemo}
        />
        <DeleteList
          deleteList={this.props.deleteList}/>
        <ShowFavorite
          showFavorite={this.props.showFavorite}
        />
        <Sort
          sort={this.props.sort}
        />
      </div>
        )}
        {(this.props.showFav === true) && (
        <div className="grid-container2">
          <ShowDemo
            showDemo={this.props.showDemo}
          />
          <DeleteList
            deleteList={this.props.deleteList}/>
          <ReturnToList
            returnToList={this.props.returnToList}
          />
          <Sort
            sort={this.props.sort}
          />
        </div>
          )}
    </div>
    )
  }
}
export default NavButtons;
