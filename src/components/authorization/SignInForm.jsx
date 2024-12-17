import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCurrentUser, login, selectAuthStatus} from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./AuthForms.css";
import InputGroup from "./InputGroup.jsx";


const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login({ username, password })).unwrap();

            const currentUser = await dispatch(fetchCurrentUser()).unwrap();

            if (currentUser.roles?.[0] === "ADMIN") {
                navigate("/admin/games", { replace: true });
            } else if (currentUser.roles?.[0] === "CUSTOMER") {
                navigate("/home", { replace: true });
            } else {
                console.warn("Неизвестная роль пользователя:", currentUser.roles);
                navigate("/", { replace: true });
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
                    <InputGroup
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        title="Login"
                    />
                    <InputGroup
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        title="Password"
                    />
                    <button type="submit" className="btn" disabled={status === "loading"}>
                        {status === "loading" ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;