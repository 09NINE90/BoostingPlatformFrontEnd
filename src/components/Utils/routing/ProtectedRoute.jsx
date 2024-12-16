import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectRole } from "../../../store/authSlice.js";

const ProtectedRoute = ({ role, allowedRoles, children }) => {
    const userRole = useSelector(selectRole);

    // Если роль не соответствует разрешённым, перенаправляем
    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" />;
    }

    // Если роль разрешена, рендерим дочерний компонент
    return children;
};

export default ProtectedRoute;
