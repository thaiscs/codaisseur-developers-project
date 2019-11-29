import { combineReducers } from "redux";
import reducer from "./developers/reducer";
import LoginReducer from "./login/reducer";
import SignedUpReducer from "./signup/reducer";
import PostReducer from "./add-posts/reducer";

export default combineReducers({
  developers: reducer,
  // post: reducer,
  loggedIn: LoginReducer,
  signedUp: SignedUpReducer,
  addPost: PostReducer
});
