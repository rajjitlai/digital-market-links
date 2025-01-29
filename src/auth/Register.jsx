import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { account } from '../config/appwrite'
import { ID } from 'appwrite'

const registerUser = async (userInfo) => {
    try {
        // Register the user
        await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username);

        // Automatically log the user in after registration
        await account.createEmailPasswordSession(userInfo.email, userInfo.password);

        // Send verification email
        await account.createVerification(`${window.location.origin}/verify-email`);

        toast.success("User registered successfully! Please check your email to verify your account.");
    } catch (error) {
        toast.error("Error registering user: " + error.message);
        console.error(error);
    }
}

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        await registerUser({ username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
