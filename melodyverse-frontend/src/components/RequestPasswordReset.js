// src/components/RequestPasswordReset.js
import React, { useState } from 'react';
import axios from 'axios';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/request-reset-password', { email });
            setMessage(response.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Request Password Reset</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RequestPasswordReset;
