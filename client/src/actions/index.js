import axios from "axios";

import { FETCH_USER } from "./types";
import { PUT_ANNOS } from "./types";
import { FETCH_TASKS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveTask = (values) => async (dispatch) => {
  const res = await axios.post("/api/tasks", values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTask = () => async (dispatch) => {
  const res = await axios.get("/api/tasks");
  dispatch({ type: FETCH_TASKS, payload: res.data });
};

export const putAnnos = (annos) => async (dispatch) => {
  dispatch({ type: PUT_ANNOS, payload: annos });
};

