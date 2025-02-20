import "../../styles/AuthForms.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthStatus } from "../../store/slice/authSlice.js";
import { NavLink, useNavigate } from "react-router-dom";
import InputGroup from "./InputGroup.jsx";
import {postRegister} from "../../services/authApi.jsx";
import Button from "@mui/material/Button";

const SignUp = ({closeModal, signInRedirect}) => {

    const [nickname, setNickname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const status = useSelector(selectAuthStatus);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // Проверяем, совпадают ли пароли
            return;
        }

        const credentials = {
            nickname: nickname,
            username: username,
            password: password,
        }

        const register = await postRegister(credentials);

        if (register) {
            closeModal();
            navigate("/signInForm")
        }

    };

    return (
        <>
            <div className="container">
                <div className="form-container">
                    <h2>Sign up</h2>
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
                            <Button className="btn" onClick={signInRedirect}>Sign In</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
