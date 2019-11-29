import api from "../api";

export function Profile() {
  return function thunk(dispatch, getState) {
    const accessToken = getState().loggedIn.accessToken.accessToken;
    console.log(accessToken);
    api("/me", { jwt: accessToken })
      .then(data => {
        console.log("profile?", data);
        dispatch(getProfile(data));
      })
      .catch(err => console.log("err", err));
  };
}

export function getProfile(profile) {
  return {
    type: "GET_PROFILE",
    payload: profile
  };
}
