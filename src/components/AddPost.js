import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/add-posts/actions";
import { Link } from "react-router-dom";
import GetPost from "./GetPost";

class AddPost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = event => {
    console.log("getting input AddPost:", this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submitting...AddPost:", this.state);
    const { title, content } = this.state;
    const action = createPost(title, content);
    this.props.dispatch(action);
  };

  render() {
    if (this.props.accessTokenLoggedIn === null) {
      return <Link to="/login">Please sign up to share your thoughts </Link>;
    }
    // else if (this.props.accessTokenSignedUp === null) {
    //   return <Link to="/signup">Please sign up to share your thoughts ;)</Link>;
    // }

    return (
      <div>
        <h1>Tell us about your journey:</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="title"
            />
          </div>
          <div>
            <label>Content: </label>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="write here"
            />
          </div>
          <input type="submit" />
        </form>
        <GetPost />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    accessTokenLoggedIn: reduxState.loggedIn.accessToken,
    accessTokenSignedUp: reduxState.signedUp.accessToken
  };
};

export default connect(mapStateToProps)(AddPost);
