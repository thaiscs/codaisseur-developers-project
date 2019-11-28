import React from "react";
import { connect } from "react-redux";
import fetchDevelopers from "../store/developers/actions";
import DetailPage from "./DetailPage";

class DevelopersList extends React.Component {
  componentDidMount() {
    console.log("Hi from ComponentDidMount :)");
    this.props.dispatch(fetchDevelopers);
  }

  render() {
    const loading = !this.props.devs;

    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>
          </div>
        )}
        <DetailPage />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state in DevelopersList:", reduxState);
  return {
    devs: reduxState.developers
  };
}
export default connect(mapStateToProps)(DevelopersList);
