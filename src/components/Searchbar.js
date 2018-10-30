import React, { Component } from 'react';

class Searchbar extends Component {

  state = {
    query: '',
    searchResult: true,
    video: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
          {this.state.searchResult === false && (
            <div className="noresult">
            <h3>There is no such video</h3>
          </div>
        )}
        </div>
      </div>
    )
  }
}

export default Searchbar
