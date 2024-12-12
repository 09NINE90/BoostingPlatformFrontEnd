import React, {useState} from 'react';
import './LoginForm.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import InputGroup from './InputGroup.jsx'

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChangePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const onChangeUsernameInput = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/api/auth/login', {
                username,
                password
            });
            const token = response.data;
            localStorage.setItem('token', token);
            console.log(localStorage.getItem('token'));
            navigate('/')
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="form-container">
            <h2>Sign in</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <InputGroup
                    type="text"
                    value={username}
                    onChange={onChangeUsernameInput}
                    title="Login"
                />
                <InputGroup
                    type="password"
                    value={password}
                    onChange={onChangePasswordInput}
                    title="Password"
                />
                <button type="submit" className="btn">Sign in</button>
            </form>
        </div>
    );
}


