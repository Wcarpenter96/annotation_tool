import { PUT_ANNOS } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case PUT_ANNOS:
      return action.payload || false;
    default:
      return {};
  }
}
