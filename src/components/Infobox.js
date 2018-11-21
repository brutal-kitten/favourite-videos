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
      <div className="infobox grid-item">
        <div className="title">{this.props.title}</div>
        <div className="addedAt">{this.props.date}</div>
        <div className="likes"><span>{this.props.likes}</span> <span className="glyphicon glyphicon-heart"></span></div>
        <div className="views"><span>{this.props.views}</span> views</div>
      </div>
    )
  }

}

export default Infobox;
