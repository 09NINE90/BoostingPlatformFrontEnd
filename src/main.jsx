import './index.css';
import {persistor, store} from "./store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import {PersistGate} from "redux-persist/integration/react";
import ProfilePage from "./pages/ProfilePage.jsx"
import BoosterMainPage from './pages/BoosterMainPage.jsx';
import {ADMIN_ROLE, CUSTOMER_ROLE, BOOSTER_ROLE} from './utils/constants/roles.js'
import Dashboard from './layouts/boosters/Dashboard.jsx';
import Orders from './layouts/boosters/Orders.jsx';
import OrderDetailPage from './pages/OrderDetailPage.jsx';
import ProtectedRoute from './utils/routing/ProtectedRoute.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import theme from './theme/theme.jsx'


const root = document.getElementById('root');

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage/>}> 
                    
                </Route>

                <Route element={<ProtectedRoute isAuthCheck={true}/>}>
                    <Route exact path = "/profile" element={<ProfilePage/>}></Route>
                </Route>
                <Route element={<ProtectedRoute allowedRoles={BOOSTER_ROLE}/>}>
                    <Route exact path="booster" element={<BoosterMainPage/>}>
                        <Route index path="dashboard" element={<Dashboard/>} />
                        <Route exact path="orders" element={<Orders/>}></Route>
                        <Route exact path="orderDetail/:uuid" element={<OrderDetailPage/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
