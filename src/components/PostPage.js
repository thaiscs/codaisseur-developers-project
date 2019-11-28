import React from "react";
import { connect } from "react-redux";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
  }

  render() {
    const title = "Posts and Comments:";
    const loading = !this.props.post;

    return (
      <div>
        <h1>{title}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{this.props.post.post}</p>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state in PostPage:", reduxState);
  return {
    post: reduxState.post
  };
}

export default connect(mapStateToProps)(PostPage);
