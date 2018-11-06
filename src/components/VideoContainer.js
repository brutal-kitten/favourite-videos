import React, { Component } from 'react';
import Infobox from './Infobox';
import Picture from './Picture';
import ButtonsPanel from './ButtonsPanel';


class VideoContainer extends Component {

  state = {
    title: '',
    date: '',
    likes: '',
    views: '',
    thumbnails: '',
    error: false
  }

  componentDidMount() {
    if(this.props.fetchAgain) {
      const url = `https://www.googleapis.com/youtube/v3/videos?id=${this.props.id}&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.items[0]);
          this.setState({
            fetchAgain: false,
            title: result.items[0].snippet.title,
            date: result.items[0].snippet.publishedAt,
            views: result.items[0].statistics.viewCount,
            likes: result.items[0].statistics.likeCount,
            thumbnails: result.items[0].snippet.thumbnails.default.url
          });
        });
      }
  }

  render() {

    return (
        <div className="grid-container">
          {this.state.error === true && (
            <div className="noresult">
            <h3>There is no such video</h3>
            </div>
          )}
          <Picture
            thumbnails={this.state.thumbnails}
          />
          <ButtonsPanel
            id={this.props.id}
            addToFavorive={this.props.addToFavorive}
            deleteVideo={this.props.deleteVideo}
          />
          <Infobox
            title={this.state.title}
            date={this.state.date}
            views={this.state.views}
            likes={this.state.likes}
          />
        </div>
    )
  }
};

export default VideoContainer;
