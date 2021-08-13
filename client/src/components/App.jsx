import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";


import Login from "./Login";
import Dashboard from "./Dashboard";
import Preview from "./Preview";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from "./Loader";



const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUser());
    },[]);
    const auth = useSelector((state) => state.auth);
    if (auth == null){
      return <Loader/>
    }
    else{
    return (
        <BrowserRouter >
          <Switch>
            <PublicRoute component={Login} path="/" exact />
            <PrivateRoute auth={auth} component={Dashboard} path="/dashboard"  />
            <PrivateRoute auth={auth} component={Preview} path="/preview"  />
            <Redirect to={Login} />
          </Switch>
        </BrowserRouter>
    );
    }
}

export default App;

