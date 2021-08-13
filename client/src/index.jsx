import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import App from "./components/App";
import reducers from "./reducers";

// dev axios helpers
import axios from "axios";
window.axios = axios;

LogRocket.init('6cej8a/my-first-project');

setupLogRocketReact(LogRocket);

LogRocket.identify('85608474-ce77-4a88-863f-dab2241403c7', {
  name: 'Weston Carpenter',
  email: 'wc.cc96@gmail.com',
  developer:true
});

console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
const middlewares = compose(
	applyMiddleware(reduxThunk),
	// https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	applyMiddleware(LogRocket.reduxMiddleware()),
);

const store = createStore(reducers, {}, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
