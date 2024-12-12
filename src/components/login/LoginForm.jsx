import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectAuthError, selectAuthStatus } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import InputGroup from "./InputGroup.jsx";

export default function LoginForm() {

    useEffect(() => {
        document.title = "SignIn - Dead PackMan"; // Устанавливаем заголовок
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector(selectAuthError);
    const status = useSelector(selectAuthStatus);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }))
            .unwrap()
            .then(() => navigate("/homePage"))
            .catch(() => {});
    };

    return (
        <div className="form-container">
            <h2>Sign in</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
    );
}
