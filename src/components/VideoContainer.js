import React, { Component } from 'react';
import Infobox from './Infobox';
import Picture from './Picture';
import ButtonsPanel from './ButtonsPanel';
import Modal from './Modal';
import PropTypes from 'prop-types';

class VideoContainer extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteVideo: PropTypes.func.isRequired,
    isfavorite: PropTypes.bool.isRequired,
    addToFavorite: PropTypes.func.isRequired,
    removeFromFavorite: PropTypes.func.isRequired,
    thumbnails: PropTypes.string.isRequired
  }

  state = {
    showModal: false
  }


  playVideo = () => {

    this.setState({showModal: true});
  }


  closeModal = () => {

    this.setState({showModal: false})
  }


  render() {

    return(
        <div className="grid-container videocontainer">
          <Picture
            thumbnails={this.props.thumbnails}
            playVideo={this.playVideo}
            id={this.props.id}
          />
          <ButtonsPanel
            id={this.props.id}
            isfavorite={this.props.isfavorite}
            addToFavorite={this.props.addToFavorite}
            deleteVideo={this.props.deleteVideo}
            playVideo={this.playVideo}
            removeFromFavorite={this.props.removeFromFavorite}
          />
          <Infobox
            title={this.props.title}
            date={this.props.date}
            views={this.props.views}
            likes={this.props.likes}
          />
          <Modal
            videoId={this.props.id}
            showModal={this.state.showModal}
            closeModal={this.closeModal}
          />
        </div>
    )
  }
};

export default VideoContainer;
