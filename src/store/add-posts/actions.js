import api from "../api";

export function createPost(title, content) {
  return function thunk(dispatch, getState) {
    const accessToken = getState().loggedIn.accessToken.accessToken;

    api("/posts", {
      method: "POST",
      body: {
        title: title,
        content: content
      },
      jwt: accessToken
    })
      .then(data => {
        console.log("post?", data);
        dispatch(getPost(data));
      })
      .catch(err => console.log("err", err));
  };
}

export function getPost(post) {
  return {
    type: "ADD_POST",
    payload: post
  };
}
