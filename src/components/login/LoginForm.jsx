import React, {useState} from 'react';
import './LoginForm.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
                <div className="input-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label>Login</label>
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label>Password</label>
                </div>
                <button type="submit" className="btn">Sign in</button>
            </form>
        </div>

    );
}
