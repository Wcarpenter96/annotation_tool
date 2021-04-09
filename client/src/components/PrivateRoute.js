import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, auth: auth }) => {
  const [state, setState] = useState("loading");
    return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page

      <Route
        render={(props) =>
          auth ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
};

export default PrivateRoute;
