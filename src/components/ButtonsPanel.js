import React, { Component } from 'react';
import Play from './Play';
import Delete from './Delete';
import AddFav from './AddFav'
import RemoveFromFavorite from './RemoveFromFavorite'
import PropTypes from 'prop-types';

class ButtonsPanel extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    playVideo: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
    isfavorite: PropTypes.bool.isRequired,
    addToFavorite: PropTypes.func.isRequired,
    removeFromFavorite: PropTypes.func.isRequired
  }

  state = {
    key: ''
  }

  //trigger state in order to toggle buttons add to/remove from favorite
  trigger = () => {
    this.setState({key: Math.random()});
  }


  render() {

    return(
      <div className="panel grid-item" key={this.state.key} >
        <Play
          id={this.props.id}
          playVideo={this.props.playVideo}
        />
        <Delete
          deleteVideo={this.props.deleteVideo}
          id={this.props.id}
        />
        {(this.props.isfavorite === true) && (
          <RemoveFromFavorite
            id={this.props.id}
            removeFromFavorite={this.props.removeFromFavorite}
            trigger={this.trigger}
          />
        )}
        {(this.props.isfavorite === false) && (
          <AddFav
            id={this.props.id}
            addToFavorite={this.props.addToFavorite}
            trigger={this.trigger}
          />
        )}
      </div>
    )
  }
}

export default ButtonsPanel;
