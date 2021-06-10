import { useReducer } from "react";
import { combineReducers } from "redux";
import annoReducer from "./annoReducer";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import unitReducer from "./unitReducer";

export default combineReducers({
  auth: authReducer,
  anno: annoReducer,
  task: taskReducer,
  units: unitReducer
});
