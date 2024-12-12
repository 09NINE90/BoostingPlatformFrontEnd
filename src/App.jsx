import Button from "./components/button/Button.jsx";
import HomePage from "./components/home/HomePage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import ServicesPage from "./components/services/ServicesPage.jsx";

import {Routes, Route} from "react-router";

const App = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route
                    exact
                    path="/homePage"
                    element={<HomePage/>}
                />
                <Route
                    exact
                    path="/loginForm"
                    element={<LoginForm/>}
                />
                <Route
                    exact
                    path="/servicesPage"
                    element={<ServicesPage/>}
                />
            </Routes>
        </>
    );
};

export default App;