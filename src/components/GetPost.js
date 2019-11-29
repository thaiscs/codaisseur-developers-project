import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class GetPost extends Component {
  render() {
    if (!this.props.post) {
      return <Link to="/posts/new">Create a Post!</Link>;
    }
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
        <p>By {this.props.post.developer.name}</p>
        <p>Updated at: {this.props.post.updatedAt}</p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    post: reduxState.addPost.post
  };
};

export default connect(mapStateToProps)(GetPost);
