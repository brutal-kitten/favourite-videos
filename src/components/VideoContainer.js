import React, { Component } from 'react';


class VideoContainer extends Component {

  state = {
    info: {},
    fetchAgain: true
  }

  componentDidMount() {
    if(this.state.fetchAgain) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=hY7m5jjJ9mM&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.items);
          this.setState({
            fetchAgain: false,
            info: result.items
          });
        });
      }
  }

  render() {

    return (
        <div className="container">

        </div>
    )
  }
};

export default VideoContainer;
