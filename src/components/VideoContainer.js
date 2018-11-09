import React, { Component } from 'react';
import Infobox from './Infobox';
import Picture from './Picture';
import ButtonsPanel from './ButtonsPanel';
import ShowVideo from './ShowVideo';
import Modal from './Modal'

class VideoContainer extends Component {

  state = {
    title: '',
    date: '',
    likes: '',
    views: '',
    thumbnails: '',
    error: false,
    showModal: false
  }

  playVideo = (id) => {
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  componentDidMount() {
    if(this.props.fetchAgain) {
      const url = `https://www.googleapis.com/youtube/v3/videos?id=${this.props.id}&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.items[0]);
          if(result.items[0]) {
            this.setState({
              fetchAgain: false,
              title: result.items[0].snippet.title,
              date: result.items[0].snippet.publishedAt,
              views: result.items[0].statistics.viewCount,
              likes: result.items[0].statistics.likeCount,
              thumbnails: result.items[0].snippet.thumbnails.default.url
            });
          } else {
            this.props.changeSearchResultError(true);
            this.props.deleteVideo(this.props.id);

          }

        })
      }
  }

  render() {



    return (
        <div className="grid-container" id="videocontainer">
          {this.state.error === true && (
            <div className="noresult">
            <h3>There is no such video</h3>
            </div>
          )}
          <Picture
            thumbnails={this.state.thumbnails}
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
            title={this.state.title}
            date={this.state.date}
            views={this.state.views}
            likes={this.state.likes}
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
