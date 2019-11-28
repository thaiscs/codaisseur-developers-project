import { combineReducers } from "redux";
import reducer from "./developers/reducer";
import authReducer from "./login/reducer";

export default combineReducers({
  developers: reducer,
  post: reducer,
  auth: authReducer
});
