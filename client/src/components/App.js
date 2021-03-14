import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Login";
import Dashboard from "./Dashboard";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  },[]);
  const auth = useSelector((state) => state.auth);
    return (
        <BrowserRouter> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
        </BrowserRouter>
    );
}

export default App;
