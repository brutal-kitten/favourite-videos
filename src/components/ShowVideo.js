import React, { Component } from 'react';

class ShowVideo extends Component {

  render () {

    return (
      <div className="showvideo">
        <div id="player"><iframe width="560" height="315" src="https://www.youtube.com/embed/JiyMaWOZGoA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
    )
  }
}

export default ShowVideo
