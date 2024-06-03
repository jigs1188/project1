// src/components/RequestEmailVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const RequestEmailVerification = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/request-email-verification', { email });
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
            <button type="submit">Request Email Verification</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RequestEmailVerification;
