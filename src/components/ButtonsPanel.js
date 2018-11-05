import React, { Component } from 'react';
import Play from './Play';
import Delete from './Delete';
import AddFav from './AddFav'

class ButtonsPanel extends Component {

  render() {
    return(
      <div className="panel" >
        <Play />
        <Delete />
        <AddFav
          id={this.props.id}
          addToFavorive={this.props.addToFavorive}
        />
      </div>
    )
  }
}

export default ButtonsPanel;
