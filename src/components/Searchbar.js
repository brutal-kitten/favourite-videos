import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Searchbar extends Component {

  static propTypes = {
    changeSearchResultError: PropTypes.func.isRequired,
    addToList: PropTypes.func.isRequired
  }

  state = {
    query: '',
    videoId: ''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.detectID();
    this.clearID();
    this.props.changeSearchResultError(false);
  }

  //sets new id and calls function that fetch info about video
  setId = (newId) => {
    this.setState({videoId: newId});
    this.clearQuery();
    this.getInfo(newId);
  }

  //fetch information about video from youtube and add item to list or set error state in App.js
  getInfo = (id) => {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if(result.items[0]) {
          this.props.addToList({id: result.items[0].id, favorite: false, date: `${new Date(result.items[0].snippet.publishedAt).toDateString()}`, title: result.items[0].snippet.title, views: result.items[0].statistics.viewCount, likes: result.items[0].statistics.likeCount, thumbnails: result.items[0].snippet.thumbnails.default.url });
        } else {
          this.props.changeSearchResultError(true);
        }
      })
  }

  //check what version of link is it and call function that set state
  detectID = () => {
    let query = this.state.query;
    if (query.match('https://youtu.be')) {
      let id = query.split('youtu.be/')[1];
      this.setId(id);
    } else if(query.match('https://www.youtube.com')) {
              let id = query.split('v=')[1];
              this.setId(id);
            } else {
                this.setId(query);
            };
  }

  //update state
  updateQuery = (value) => {
    this.setState({query: value});
  }

  //clear query and update state
  clearQuery = () => {
    this.setState({query: ''});
  }

  //set empty id
  clearID = () => {
    this.setState({videoId: ''});
  }


  render () {

    return (
      <div className="searchbar">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Enter video URL or identifier: <br/>
          <input tabIndex='0' className="search" type="text"
            placeholder= "Let's find a video"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <button tabIndex='0' className="addToList" type="submit"><span className="glyphicon glyphicon-plus"></span></button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
