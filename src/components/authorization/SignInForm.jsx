import "./AuthForms.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthStatus, setAuth, setRole} from "../../store/slice/authSlice.js";
import {NavLink, useNavigate} from "react-router-dom";
import {postAuthenticated} from "../../api/authApi.jsx";
import {TextField} from "@mui/material";
import { ADMIN_ROLE, CUSTOMER_ROLE } from "../utils/constants/roles.js";

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const credentials = {
                username: username,
                password: password,
            }

            const {roles, token} = await postAuthenticated(credentials)

            if (token) {
                dispatch(setRole(roles));
                dispatch(setAuth(true))
            }

            if (roles === ADMIN_ROLE) {
                navigate("/admin/games", {replace: true});
            } else if (roles === CUSTOMER_ROLE) {
                navigate("/home", {replace: true});
            } else {
                console.warn("Неизвестная роль пользователя:", roles);
                navigate("/", {replace: true});
            }

        } catch (error) {
            console.error("Ошибка авторизации:", error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        className="input-group"
                        id="outlined-basic"
                        label="Login"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="form-field"/>
                    <TextField
                        className="input-group"
                        id="outlined"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-field"/>
                    <button type="submit" className="btn" disabled={status === "loading"}>
                        {status === "loading" ? "Signing in..." : "Sign in"}
                    </button>
                    <div className="form-links">
                        <NavLink to="/signUpForm">Sign up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;