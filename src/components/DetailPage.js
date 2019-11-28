import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailPage extends Component {
  render() {
    return (
      <div>
        <Link to="/developers">More Details</Link>
      </div>
    );
  }
}

export default DetailPage;
