import { PUT_UNITS } from "../actions/types";
import { FETCH_TASK } from "../actions/types";


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TASK:
      return action.payload.units; 
    case PUT_UNITS:
      return action.payload || false;
    default:
      return state;
  }
}
