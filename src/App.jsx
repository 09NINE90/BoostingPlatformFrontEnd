import Button from "./components/button/Button.jsx";
import LoginForm from "./components/login/LoginForm.jsx";
import HomePage from "./components/home/HomePage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export default function App() {

    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePage/>}
                    />
                    <Route
                        exact
                        path="/LoginForm"
                        element={<LoginForm/>}
                    />
                </Routes>
            </Router>
        </>
    )
}

