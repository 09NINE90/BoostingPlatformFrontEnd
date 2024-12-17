import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AuthProvider from './components/authorization/provider/AuthProvider.tsx';
import ProtectedRoute from './components/utils/routing/ProtectedRoute.tsx';
import GamePage from "./components/Admin/game/page/GamePage.jsx";
import HomePage from "./components/home/HomePage.jsx";
import SignInForm from "./components/authorization/SignInForm.jsx";
import SignUpForm from "./components/authorization/SignUpForm.jsx";
import ServicesPage from "./components/services/ServicesPage.jsx";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from './store/authSlice';
import { useDispatch } from 'react-redux';

const root = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: '/signInForm',
        element: <SignInForm />,
    },
    {
        path: '/signUpForm',
        element: <SignUpForm />,
    },
    {
        path: '/admin/games',
        element: (
            <ProtectedRoute allowedRoles={['ADMIN']}>
                <GamePage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/home',
        element: (
            <ProtectedRoute allowedRoles={['CUSTOMER']}>
                <HomePage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/services',
        element: (
            <ProtectedRoute allowedRoles={['CUSTOMER']}>
                <ServicesPage />
            </ProtectedRoute>
        ),
    },
]);

// Компонент для инициализации аутентификации
const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const initAuth = async () => {
            const getCookie = (name) => {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : null;
            };

            const token = getCookie("token");
            if (token) {
                try {
                    await dispatch(fetchCurrentUser()).unwrap();
                } catch (error) {
                    console.error("Ошибка при загрузке текущего пользователя:", error);
                }
            }
            setLoading(false);
        };

        initAuth();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <RouterProvider router={router} />;
};

createRoot(root).render(
    <Provider store={store}>
        <AuthProvider>
            <App /> {/* Встроенный App-компонент с загрузкой пользователя */}
        </AuthProvider>
    </Provider>
);
