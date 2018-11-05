import React, { Component } from 'react';
import ShowVideo from './ShowVideo';
import SearchResult from './SearchResult'

class Searchbar extends Component {

  state = {
    query: '',
    searchResult: false,
    videoId: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.detectID();
  }

  setId = (newId) => {
    this.setState({videoId : newId});
    this.setState({searchResult: true});
    this.clearQuery();
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

  render () {

    return (
      <div className="searchbar">
        <h2>Find your favorite video</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Enter video URL or identifier: <br/>
          <input type="text"
            placeholder= "Let's find a video"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <button>Submit</button>
        </form>
        <div className="search-video-result">
          
          {this.state.searchResult === true && (
            <SearchResult
              id={this.state.videoId}
            />
          )
          }
        </div>
        {/* <ShowVideo
          videoId={this.state.videoId}
        /> */}
      </div>
    )
  }
}

export default Searchbar;
