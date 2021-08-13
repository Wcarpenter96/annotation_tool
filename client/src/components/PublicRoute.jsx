import React, { useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import { fetchUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PublicRoute = ({component: Component}) => {

    return (

        // Show the component 

        <Route render={props => <Component {...props} />} />
    );
};

export default PublicRoute;