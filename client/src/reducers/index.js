import { combineReducers } from "redux";
import annoReducer from "./annoReducer";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  anno: annoReducer,
  tasks: taskReducer
});
