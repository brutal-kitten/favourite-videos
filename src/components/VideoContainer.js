import React, { Component } from 'react';
import Infobox from './Infobox';


class VideoContainer extends Component {

  state = {
    info: [],
    fetchAgain: true,
    title: '',
    date: '',
    likes: '',
    views: ''
  }

  componentDidMount() {
    if(this.state.fetchAgain) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=hY7m5jjJ9mM&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.items[0]);
          this.setState({
            fetchAgain: false,
            info: result.items,
            title: result.items[0].snippet.title,
            date: result.items[0].snippet.publishedAt,
            views: result.items[0].statistics.viewCount,
            likes: result.items[0].statistics.likeCount
          });
        });
      }
  }

  render() {

    return (
        <div className="container">
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
