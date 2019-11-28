import React, { Component } from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";

class Developer extends Component {
  render() {
    const loading = !this.props.devs;

    return (
      <div>
        <h3>Details:</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          this.props.devs.rows.map(dev => {
            return (
              <ul key={dev.id}>
                <h4>Name: {dev.name}</h4>
                <h5>Email: {dev.email}</h5>
              </ul>
            );
          })
        )}
        <Toolbar />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state in Developer:", reduxState);
  return {
    devs: reduxState.developers
  };
}
export default connect(mapStateToProps)(Developer);
