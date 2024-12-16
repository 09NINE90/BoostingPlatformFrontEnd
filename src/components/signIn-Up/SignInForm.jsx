import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentUser, login, selectAuthStatus, selectRole} from "../../store/authSlice";
import {NavLink} from "react-router-dom";
import "./AuthForms.css";
import InputGroup from "./InputGroup.jsx";


const SignInForm = () => {

    const role = useSelector(selectRole);


    useEffect(() => {
        document.title = "SignIn - Dead PackMan"; // Устанавливаем заголовок
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    // const error = useSelector(selectAuthError);
    const status = useSelector(selectAuthStatus);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }))
            .unwrap()
            .then(() => {
                dispatch(fetchCurrentUser()).then(() => {
                    console.log(status);

                }).catch(error => {
                    console.log(error);
                })

            })
            .catch((error) => {
                console.error("Ошибка авторизации:", error);
            });
    };


    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign in</h2>
                {/*{error && <p style={{color: "red"}}>{error}</p>}*/}
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
                        <NavLink to="/signUpForm">Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
