// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('./userModel');
const sendConfirmationEmail = require('./resetPassMail');
const sendResetPasswordEmail = require('./forgotEmail');
const baseUrl=require('./baseUrl');

const app = express();
function generateToken() {
    return crypto.randomBytes(20).toString('hex');
  }
// Generate a password reset token
app.post('/forgot-password', async (req, res) => {
    try {
        const {email} = req.body;
        const token = generateToken();
        const user = await User.findOne({email: email});
        if (!user) {
          res.send({message: 'No account with that email address exists.'});
        }
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();
        const link = `${baseUrl}reset-password/${token}`;
        await sendResetPasswordEmail(email, link);
        res.send({
          message:
            'An email has been sent with instructions on how to reset your password.',
        });
      } catch (err) {
        console.error(err);
        res.send({error: 'There was an error in sending Mail.'});
      }
    },
// Verify the token and render the password reset page
app.get('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  try {
    // Find the user by the token
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }
    // Render the password reset page or send a response with the necessary data
    res.status(200).json({ userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}))

// Update the password
app.post('/reset-password', async (req, res) => {
  const { userId, password } = req.body;
  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Update the password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpiry = undefined;
    await user.save();
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports=("")
