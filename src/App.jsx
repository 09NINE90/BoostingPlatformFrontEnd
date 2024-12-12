import Button from "./components/button/Button.jsx";
import HomePage from "./components/home/HomePage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import LoginForm from "./components/login/LoginForm.jsx";

import {Routes, Route} from "react-router";

const isAuthenticated = () => {
    console.log(localStorage.getItem('token'))
    return !!localStorage.getItem('token');
}

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
            </Routes>
        </>
    );
};

export default App;