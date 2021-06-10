import { PUT_UNITS } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case PUT_UNITS:
      return action.payload || false;
    default:
      return state;
  }
}
