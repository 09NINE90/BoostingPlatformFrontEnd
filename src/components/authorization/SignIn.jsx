import "../../styles/AuthForms.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthStatus, setAuth, setRole} from "../../store/slice/authSlice.js";
import {postAuthenticated} from "../../services/authApi.jsx";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const SignIn = ({closeModal, signUpRedirect}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);

    const signIn = async () => {
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
            closeModal();
        } catch (error) {
            console.error("Ошибка авторизации:", error);
        }
    }

    return (    
            <div className="items-center justify-center">
                    <TextField
                        label="Login"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="form-field"/>
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-field"/>
                    
                    <button type="submit" className="btn" disabled={status === "loading"}>
                        <Button className="btn" onClick={signIn} loading={status === "loading"}>Sign In</Button>
                    </button>
                    <div className="form-links">
                        <Button className="btn" onClick={signUpRedirect}>Sign Up</Button>
                    </div>
            </div>
    );
};

export default SignIn;