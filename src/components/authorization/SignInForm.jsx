import "./AuthForms.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthStatus, setAuth, setRole} from "../../store/slice/authSlice.js";
import {NavLink, useNavigate} from "react-router-dom";
import InputGroup from "./InputGroup.jsx";
import {postAuthenticated} from "../../api/authApi.jsx";


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

            if (roles === "ADMIN") {
                navigate("/admin/games", {replace: true});
            } else if (roles === "CUSTOMER") {
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
                    <div className="form-links">
                        <NavLink to="/signUpForm">Sign up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;