import api from "../api";

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/developers/${id}`).then(post => {
      console.log("Fetching your data from Action Creator fetchPosts");

      dispatch(setPost(post));
    });
  };
}

export function setPost(post) {
  console.log("SetPost Action dispatched after fetching!");
  return {
    type: "postsAndComments/FETCHED",
    payload: post
  };
}
