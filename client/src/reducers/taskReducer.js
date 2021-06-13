import { FETCH_TASK } from "../actions/types";
import { UPDATE_DESCRIPTION } from "../actions/types";
import { UPDATE_CLASSES } from "../actions/types";

export default function (state = {'description':'','class':'','tags':'','units':''}, action) {
  switch (action.type) {
    case FETCH_TASK:
      return action.payload;
    case UPDATE_DESCRIPTION:
      return {...state,'description':action.payload}
    case UPDATE_CLASSES:
      return {...state,'classes':action.payload}
    default:
      return state;
  }
}