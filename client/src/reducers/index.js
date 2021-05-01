import { combineReducers } from "redux";
import annoReducer from "./annoReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  anno: annoReducer
});
