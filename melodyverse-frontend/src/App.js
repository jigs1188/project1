// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import PostList from './components/PostList';
import RequestPasswordReset from './components/RequestPasswordReset';
import ResetPassword from './components/ResetPassword';
import RequestEmailVerification from './components/RequestEmailVerification';
import VerifyEmail from './components/VerifyEmail';

const App = () => (
    <Router>
        <Routes>
            <Route path="/signup" component={Signup} />
            <Route path="/posts" component={PostList} />
            <Route path="/request-reset-password" component={RequestPasswordReset} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/request-email-verification" component={RequestEmailVerification} />
            <Route path="/verify-email" component={VerifyEmail} />
        </Routes>
    </Router>
);

export default App;
