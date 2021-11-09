import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

// dev axios helpers
import axios from "axios";
window.axios = axios;


const middlewares = compose(
  applyMiddleware(reduxThunk),
  // https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  // applyMiddleware(LogRocket.reduxMiddleware()),
);

const store = createStore(reducers, {}, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
