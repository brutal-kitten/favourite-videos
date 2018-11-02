import React, { Component } from 'react';
import Play from './Play';

class ButtonsPanel extends Component {

  render() {
    return(
      <div className="panel" >
        <Play />
        <Delete />
        <AddFav />
      </div>
    )
  }
}

export default ButtonsPanel;
