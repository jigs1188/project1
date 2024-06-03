// routes/passwordReset.js
const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const PasswordResetToken = require('../models/PasswordResetToken');

const router = express.Router();

// Request Password Reset
router.post('/request-reset-password', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'User with given email does not exist' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    await new PasswordResetToken({ userId: user._id, token }).save();

    // Simulate sending email
    console.log(`Password reset token: ${token}`);

    res.status(200).json({ message: 'Password reset token generated and sent to your email' });
});

// Reset Password
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;
    const passwordResetToken = await PasswordResetToken.findOne({ token });

    if (!passwordResetToken) {
        return res.status(400).json({ message: 'Invalid or expired password reset token' });
    }

    const user = await User.findById(passwordResetToken.userId);
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    await PasswordResetToken.deleteOne({ _id: passwordResetToken._id });

    res.status(200).json({ message: 'Password reset successful' });
});

module.exports = router;
