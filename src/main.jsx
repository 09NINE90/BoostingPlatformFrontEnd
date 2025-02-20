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


const root = document.getElementById('root');

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage/>}> 
                    
                </Route>
                <Route element={<ProtectedRoute allowedRoles={CUSTOMER_ROLE}/>}>
                    <Route exact path = "/profile" element={<ProfilePage/>}></Route>
                </Route>
                <Route exact path="booster" element={<BoosterMainPage/>}>
                    <Route index path="dashboard" element={<Dashboard/>} />
                    <Route exact path="orders" element={<Orders/>}></Route>
                    <Route exact path="orderDetail/:uuid" element={<OrderDetailPage/>}></Route>
                </Route>
                
            </Routes>

            {/* <div className={isAuthenticated ? 'auth-container-active' : 'auth-container'}>
                {isCustomer && <Navigation/>}
            </div> */}



            {/* <div className={isAdmin ? 'dashboard-active' : 'dashboard'}>
                <div className={isAdmin ? 'main-container-active' : 'main-container'}>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="admin" element={<ProtectedRoute allowedRoles={"ADMIN"}/>}>
                            <Route exact path="games" element={<GameSection/>}/>
                            <Route exact path="services" element={<ServiceSection/>}/>
                        </Route>
                        <Route element={<ProtectedRoute allowedRoles={"CUSTOMER"}/>}>
                            <Route exact path = "/profile" element={<Profile/>}></Route>
                            <Route exact path="/services" element={<ServicesPage/>}/>
                        </Route>
                        <Route exact path="/signInForm" element={<SignInForm/>}/>
                        <Route exact path="/signUpForm" element={<SignUpForm/>}/>
                    </Routes>
                </div>
            </div> */}

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
