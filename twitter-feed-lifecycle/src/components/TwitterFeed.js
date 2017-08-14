import React, { Component } from 'react';
import Tweet from './Tweet'

class TwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    console.log('inside DidMount')
    fetch('http://localhost:4567/api/v1/tweets')
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( body => {
        console.log('Got json body') 
        this.setState({tweets: body})
      })
      .catch(error => console.error())
  }

  render() {
    console.log(this.state.tweets)
    let tweets = this.state.tweets.map(tweet => {
      return <Tweet key={tweet.id_str} tweet={tweet} />
    })

    return (
      <div className="row columns small-12 medium-9 large-6">
        <div className="twitter-feed">
          {tweets}
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
