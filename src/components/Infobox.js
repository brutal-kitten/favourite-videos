import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Infobox extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired
  }


  render() {



    return (
      <div className="info">
        <div className="title infobox">{this.props.title}</div>
        <div className="addedAt infobox">{this.props.date}</div>
        <div className="likes infobox"><span>{this.props.likes}</span> <span className="glyphicon glyphicon-heart"></span></div>
        <div className="views infobox"><span>{this.props.views}</span> views</div>
      </div>
    )
  }

}

export default Infobox;
