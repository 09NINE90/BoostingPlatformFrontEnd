import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth, selectRole} from "../../../store/slice/authSlice.js";

const ProtectedRoute = ({allowedRoles}) => {

    const isAuthenticated = useSelector(selectAuth);
    const role = useSelector(selectRole);

    if (!isAuthenticated) {
        return <Navigate to="/signInForm"/>;
    }
    if (!role) {
        console.warn("Роль пользователя не определена.");
        return <Navigate to="/signInForm"/>;
    }

    if (role !== allowedRoles) {
        console.warn("Доступ запрещён для роли:", role);
        return <Navigate to="/" replace/>;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
