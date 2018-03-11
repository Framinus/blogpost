import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
