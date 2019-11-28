import api from "../api";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        api("/me", {
          method: "GET",
          jwt: data.jwt
        });
        console.log(data.jwt);
        // dispatch(userLoggedIn(data.jwt, profile));
      })
      .catch(err => console.log("err", err));
  };
}

// An action creator
export function userLoggedIn(accessToken, profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { accessToken, profile }
  };
}
