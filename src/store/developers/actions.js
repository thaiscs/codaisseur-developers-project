import api from "../api";

export default function fetchDevelopers(dispatch, getState) {
  api("/developers").then(data => {
    console.log("Fetching your data from Action Creator fetchDevelopers");
    dispatch(developersFetched(data));
  });
}

function developersFetched(data) {
  console.log("Action dispatched after fetching!");

  return {
    type: "developers/FETCHED",
    payload: data
  };
}
