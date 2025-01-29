import React, { useState } from 'react';
import { account } from '../config/appwrite';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const session = await account.createEmailPasswordSession(email, password);
            console.log("Logged in:", session);

            const userDetails = await account.get();

            if (userDetails.emailVerification) {
                toast.success('Login successful!');
                navigate("/");
            } else {
                toast.error('Please verify your email to continue.');
                await account.deleteSession('current');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            toast.error(`Login failed: ${error.message}`);
        }

        setLoading(false);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-field">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-field">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
};

export default LoginForm;
