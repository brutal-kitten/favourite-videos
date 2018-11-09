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
        <div className="title"> Title: <span>{this.props.title}</span></div>
        <div className="addedAt">Published At: <span> {this.props.date}</span></div>
        <div className="likes"><span>{this.props.likes}</span> Likes</div>
        <div className="views"><span>{this.props.views}</span> Views</div>
      </div>
    )
  }

}

export default Infobox;
