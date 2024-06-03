// src/components/VerifyEmail.js
import React, { useState } from 'react';
import axios from 'axios';

const VerifyEmail = () => {
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/verify-email', { token });
            setMessage(response.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter your token"
                required
            />
            <button type="submit">Verify Email</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default VerifyEmail;
