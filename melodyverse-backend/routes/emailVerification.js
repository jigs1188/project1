// routes/emailVerification.js
const express = require('express');
const crypto = require('crypto');
const User = require('../models/User');
const EmailVerificationToken = require('../models/EmailVerificationToken');

const router = express.Router();

// Request Email Verification
router.post('/request-email-verification', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'User with given email does not exist' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    await new EmailVerificationToken({ userId: user._id, token }).save();

    // Simulate sending email
    console.log(`Email verification token: ${token}`);

    res.status(200).json({ message: 'Email verification token generated and sent to your email' });
});

// Verify Email
router.post('/verify-email', async (req, res) => {
    const { token } = req.body;
    const emailVerificationToken = await EmailVerificationToken.findOne({ token });

    if (!emailVerificationToken) {
        return res.status(400).json({ message: 'Invalid or expired email verification token' });
    }

    const user = await User.findById(emailVerificationToken.userId);
    user.isVerified = true;
    await user.save();
    await EmailVerificationToken.deleteOne({ _id: emailVerificationToken._id });

    res.status(200).json({ message: 'Email verified successfully' });
});

module.exports = router;
