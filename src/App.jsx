import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {fetchCurrentUser, selectAuth, selectIsAuthenticated, selectRole} from "./store/authSlice";
import HomePage from './components/home/HomePage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import SignInForm from './components/signIn-Up/SignInForm.jsx';
import SignUpForm from './components/signIn-Up/SignUpForm.jsx';
import ServicesPage from './components/services/ServicesPage.jsx';
import GamePage from "./components/Admin/game/gamePage/GamePage.jsx";
import ProtectedRoute from "./components/Utils/routing/ProtectedRoute.jsx";

export const CheckRole = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const role = useSelector(selectRole);

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [isAuthenticated, role, dispatch]);

    useEffect(() => {
        if (isAuthenticated) {
            if (role === "ADMIN") {
                navigate("/admin/gamePage");
            } else if (role === "CUSTOMER") {
                navigate("/homePage");
            }
        } else {
            navigate("/signInForm");
        }
    }, [isAuthenticated, role, navigate]);

    return null;
};

const App = () => {
    const dispatch = useDispatch();
    const role = useSelector(selectRole);
    const isAuth = useSelector(selectAuth);

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    // const isAdmin = role === "ADMIN";

    const shouldShowNavigation = isAuth && role !== "ADMIN";

    return (
        <Router>
            <>
                <CheckRole/>
                {shouldShowNavigation && <Navigation />}
                <Routes>
                    {/* Гостевые маршруты */}
                    <Route exact path="/signInForm" element={<SignInForm />} />
                    <Route exact path="/signUpForm" element={<SignUpForm />} />
                    {/* Маршруты для пользователей */}
                    <Route
                        exact
                        path="/homePage"
                        element={
                            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        exact
                        path="/servicesPage"
                        element={
                            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                                <ServicesPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Маршруты для администратора */}
                    <Route
                        exact
                        path="/admin/gamePage"
                        element={
                            <ProtectedRoute allowedRoles={["ADMIN"]}>
                                <GamePage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Default route */}
                    <Route path="/" element={<Navigate to="/signInForm" />} />
                </Routes>
            </>
        </Router>
    );
};

export default App;
