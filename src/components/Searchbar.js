import React, { Component } from 'react';



class Searchbar extends Component {

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

  setId = (newId) => {
    this.setState({videoId: newId});
    this.clearQuery();
    this.getInfo(newId);


  }

  getInfo = (id) => {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyB7asSzTvcMogycBslu8o4RB3DjOumaqtA&part=snippet,contentDetails,statistics,status`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items[0]);
        if(result.items[0]) {
          this.props.addToList({id: result.items[0].id, favorite: false, date: `${new Date(result.items[0].snippet.publishedAt).toDateString()}`, title: result.items[0].snippet.title, views: result.items[0].statistics.viewCount, likes: result.items[0].statistics.likeCount, thumbnails: result.items[0].snippet.thumbnails.default.url });
        } else {
          this.props.changeSearchResultError(true);

        }

      })
  }

  detectID = () => {
    let query = this.state.query;
    if (query.match('https://youtu.be')) {
      let id = query.split('youtu.be/')[1];
      console.log(id);
      this.setId(id);
    } else if(query.match('https://www.youtube.com')) {
              let id = query.split('v=')[1];
              console.log(id);
              this.setId(id);
            } else {
              console.log(query);
                this.setId(query);
            };
  }

  /*update state*/
  updateQuery = (value) => {
    this.setState({query: value});
  }

  /*clear query and update state*/
  clearQuery = () => {
    this.setState({query: ''});
  }

  clearID = () => {
    this.setState({videoId: ''});
  }

  render () {

    return (
      <div className="searchbar">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Enter video URL or identifier: <br/>
          <input className="search" type="text"
            placeholder= "Let's find a video"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <button className="addToList" type="submit"><span className="glyphicon glyphicon-plus"></span></button>
        </form>
      </div>
    )
  }
}

export default Searchbar;
