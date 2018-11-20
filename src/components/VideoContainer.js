import React, { Component } from 'react';
import Infobox from './Infobox';
import Picture from './Picture';
import ButtonsPanel from './ButtonsPanel';
import ShowVideo from './ShowVideo';
import Modal from './Modal'

class VideoContainer extends Component {

  state = {
    error: false,
    showModal: false
  }

  playVideo = (id) => {
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {



    return (
        <div className="grid-container videocontainer">
          {this.state.error === true && (
            <div className="noresult">
            <h3>There is no such video</h3>
            </div>
          )}
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
