import { Navigate } from "react-router-dom";
import { useAuth } from "../../authorization/provider/AuthProvider.js";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { authToken, currentUser } = useAuth();

    if (!authToken) {
        return <Navigate to="/signInForm" />;
    }
    if (!currentUser?.role) {
        console.warn("Роль пользователя не определена.");
        return <Navigate to="/signInForm" />;
    }

    if (!allowedRoles.includes(currentUser.role)) {
        console.warn("Доступ запрещён для роли:", currentUser.role);
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
