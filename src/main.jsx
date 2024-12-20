import './index.css';
import {persistor, store} from "./store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import {Provider, useDispatch, useSelector} from "react-redux";
import HomePage from "./components/home/HomePage.jsx";
import SignInForm from "./components/authorization/SignInForm.jsx";
import SignUpForm from "./components/authorization/SignUpForm.jsx";
import ServicesPage from "./components/services/ServicesPage.jsx";
import Sidebar from "./components/Admin/sidebar/Sidebar.jsx";
import Header from "./components/Admin/header/Header.jsx";
import GameSection from "./components/Admin/game/section/GameSection.jsx";
import ServiceSection from "./components/Admin/services/section/ServiceSection.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import ProtectedRoute from "./components/utils/routing/ProtectedRoute";
import {selectAuth, selectRole, setAuth, setRole} from "./store/slice/authSlice.js";
import {useEffect} from "react";
import {getAuthenticated} from "./api/authApi.jsx";
import {PersistGate} from "redux-persist/integration/react";

const root = document.getElementById('root');

export const App = () => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectAuth);
    const role = useSelector(selectRole);

    const isAdmin = isAuthenticated && role === 'ADMIN';
    const isCustomer = isAuthenticated && role === 'CUSTOMER';

    console.log('isAuthenticated', isAuthenticated, 'role', role);

    useEffect(() => {
        const fetchAuthentication = async () => {
            try {
                const { roles, token } = await getAuthenticated();

                if (token) {
                    dispatch(setAuth(true));
                    dispatch(setRole(roles));
                } else {
                    dispatch(setAuth(false));
                }
            } catch (error) {
                console.error('Authentication failed:', error);
                dispatch(setAuth(false));
            }
        };

        fetchAuthentication();
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className={isAuthenticated ? 'auth-container-active' : 'auth-container'}>
                {isAdmin && <Header/>}
                {isAdmin && <Sidebar/>}
                {isCustomer && <Navigation/>}
            </div>
            <Routes>
                <Route exact path="/" element={<SignInForm/>}/>
                <Route exact path="admin" element={<ProtectedRoute allowedRoles={"ADMIN"}/>}>
                    <Route exact path="games" element={<GameSection/>}/>
                    <Route exact path="services" element={<ServiceSection/>}/>
                </Route>
                <Route element={<ProtectedRoute allowedRoles={"CUSTOMER"}/>}>
                    <Route exact path="/home" element={<HomePage/>}/>
                    <Route exact path="/services" element={<ServicesPage/>}/>
                </Route>
                <Route exact path="/signInForm" element={<SignInForm/>}/>
                <Route exact path="/signUpForm" element={<SignUpForm/>}/>
            </Routes>
        </BrowserRouter>
    )
};

createRoot(root).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);
