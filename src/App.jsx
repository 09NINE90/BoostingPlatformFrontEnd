import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/authSlice";
import HomePage from './components/home/HomePage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import SignInForm from './components/signIn-Up/SignInForm.jsx';
import SignUpForm from './components/signIn-Up/SignUpForm.jsx';
import ServicesPage from './components/services/ServicesPage.jsx';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(fetchCurrentUser()));
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <Router>
            <>
                <Navigation />
                <Routes>
                    <Route exact path="/homePage" element={<HomePage />} />
                    <Route exact path="/signInForm" element={<SignInForm />} />
                    <Route exact path="/signUpForm" element={<SignUpForm />} />
                    <Route exact path="/servicesPage" element={<ServicesPage />} />
                    {/* Default route */}
                    <Route path="/" element={<Navigate to="/homePage" />} />
                </Routes>
            </>
        </Router>
    );
};

export default App;