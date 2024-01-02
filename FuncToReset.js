const Token = require('./models/token');
const mongoose = require('mongoose');
const sendResetPasswordEmail = require('./forgotEmail');
const User = require('./models/userModel');
const crypto = require('crypto');
const sendConfirmationEmail = require('./resetPassMail');
const bcrypt = require('bcrypt');
const {error} = require('console');
const baseUrl=require('./baseUrl');

function generateToken() {
  return crypto.randomBytes(20).toString('hex');
}

const FuncToReset = {
  async sendMailforReset(req, res) {
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
      const link = `http://10.141.226.133:7000/reset-password/${token}`;
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
  async GetToken(req, res) {
    const token = req.params.token;
    try {
      // Find the user by the token
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {$gt: Date.now()},
      });
      //console.log('User:', user);
      if (!user) {
        console.log('Invalid or expired token');
        return res.status(404).json({error: 'Invalid or expired token'});
      }
      //console.log('Reset password page rendered');
      res.send('Reset Your Password on the next Screen.');
    } catch (error) {
      //console.error(error);
      res.res.status(500).json({error: 'Internal server error'});
    }
  },
  async UpdatePassword(req, res) {
    const {email, password} = req.body;
    try {
      // Find the user by ID
      const user = await User.find({email:email});
      if (!user) {
        return res.status(404).json({error: 'User not found'});
      }
      // Update the password
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
      await sendConfirmationEmail(email);
      res.status(200).json({message: 'Password reset successful'});
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Internal server error'});
    }
  },
};

module.exports = FuncToReset;
