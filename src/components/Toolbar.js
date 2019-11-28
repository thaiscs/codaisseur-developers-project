import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back to Homepage</Link>
      </div>
    );
  }
}

export default Toolbar;
