
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Reuse the same CSS for form styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (email && password) {
            alert('Login Successful');
            // Navigate to the Main page after successful login
            window.location.href = 'https://shyamnecsite.netlify.app';
           // navigate('/main');
        } else {
            alert('Please fill in both email and password.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;




