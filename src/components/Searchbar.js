import React, { Component } from 'react';
import ShowVideo from './ShowVideo';


class Searchbar extends Component {

  state = {
    query: '',
    videoId: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.clearID();
    this.detectID();
    this.props.changeSearchResultError(false);
  }

  setId = (newId) => {
    this.setState({videoId: newId});
    this.props.setCurrentSearchId(newId);
    this.clearQuery();
    this.props.addToList(newId);

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
    this.props.setCurrentSearchId('');
  }

  render () {

    return (
      <div className="searchbar">
        <h2>Make a list of your favorite videos</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Enter video URL or identifier: <br/>
          <input type="text"
            placeholder= "Let's find a video"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <button type="submit">Add video to my list</button>
        </form>
        {/* <ShowVideo
          videoId={this.state.videoId}
        /> */}
      </div>
    )
  }
}

export default Searchbar;
