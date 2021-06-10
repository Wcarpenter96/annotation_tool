import axios from "axios";

import { FETCH_USER } from "./types";
import { PUT_ANNOS } from "./types";
import { FETCH_TASK } from "./types";
import { UPDATE_DESCRIPTION } from "./types";
import { UPDATE_CLASSES } from "./types";
import { PUT_UNITS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateDescription = (description) => async (dispatch) => {
  dispatch({ type: UPDATE_DESCRIPTION, payload: description });
};

export const updateClasses = (classes) => async (dispatch) => {
  dispatch({ type: UPDATE_CLASSES, payload: classes });
};

export const saveTask = (values) => async (dispatch) => {
  const res = await axios.post("/api/tasks", values);
  dispatch({ type: FETCH_TASK, payload: res.data });
};

export const putUnits = (f) => async (dispatch) => {
  const res = await axios.post("/api/units", f);
  dispatch({ type: PUT_UNITS, payload: res });
};


export const getTask = () => async (dispatch) => {
  const res = await axios.get("/api/tasks");
  dispatch({ type: FETCH_TASK, payload: res.data });
};


export const putAnnos = (annos) => async (dispatch) => {
  dispatch({ type: PUT_ANNOS, payload: annos });
};

