import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, selectAuthError, selectAuthStatus } from "../../store/authSlice"; // Предполагается, что у вас есть register action
import { NavLink, useNavigate } from "react-router-dom";
import "./AuthForms.css"; // Подключаем нужные стили
import InputGroup from "./InputGroup.jsx"; // Повторно используем ваш InputGroup компонент

const SignUpForm = () => {
    useEffect(() => {
        document.title = "Sign Up - Dead PackMan"; // Устанавливаем заголовок страницы
    }, []);

    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector(selectAuthError);
    const status = useSelector(selectAuthStatus);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // Проверяем, совпадают ли пароли
            return;
        }

        dispatch(register({ nickname, username, password }))
            .unwrap()
            .then(() => navigate("/signInForm")) // Переход на страницу после успешной регистрации
            .catch(() => {});
    };

    return (
        <>
            <div className="container">
                <div className="form-container">
                    <h2>Sign up</h2>
                    {/*{error && <p style={{ color: "red" }}>{error}</p>}*/}
                    <form onSubmit={handleSubmit}>
                        <InputGroup
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            title="Nickname"
                        />
                        <InputGroup
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            title="Email"
                        />
                        <InputGroup
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            title="Password"
                        />
                        <InputGroup
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            title="Confirm Password"
                        />
                        <button type="submit" className="btn" disabled={status === "loading"}>
                            {status === "loading" ? "Signing up..." : "Create Account"}
                        </button>
                        <div className="form-links">
                            <NavLink to="/signInForm">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
