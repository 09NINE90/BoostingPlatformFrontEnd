import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth, selectRole} from "../../store/slice/authSlice.js";

const ProtectedRoute = ({allowedRoles}) => {

    const isAuthenticated = useSelector(selectAuth);
    const role = useSelector(selectRole);

    if (!isAuthenticated) {
        return <Navigate to="/"/>;
    }
    if (!role) {
        return <Navigate to="/"/>;
    }

    if (role !== allowedRoles) {
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
