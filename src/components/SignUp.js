import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Fake API call to simulate sign-up
            await axios.post('https://jsonplaceholder.typicode.com/posts', userData);

            // Set a flag in localStorage to indicate the user is signed up
            localStorage.setItem('isSignedUp', 'true');

            alert('Sign Up Successful');

            // Clear the form after sign-up
            setUserData({
                name: '',
                phone: '',
                email: '',
                password: ''
            });

            navigate('/login'); // Redirect to login page after sign-up
        } catch (error) {
            console.error('Sign Up Failed:', error);
            alert('Sign Up Failed');
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
