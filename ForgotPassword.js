const express = require('express');
const ForgotRouter = express.Router();
const User = require('./models/userModel');
const { sendMail } = require('./forgotEmail');
const ResetToken = require('./models/ResetTokenSchema');
const bcrypt = require('bcrypt');
function getRandomFourDigitNumber() {
  const min = 1000; // Minimum four-digit number (inclusive)
  const max = 9999; // Maximum four-digit number (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
ForgotRouter.post('/forgotPassword', async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.send({ success: false, message: 'Please provide a valid Email' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ success: false, message: 'User not found' });
    }
    const existingToken = await ResetToken.findOne({ owner: user._id });
    if (existingToken) {
      return res.send({ message: 'Email already sent.' });
    }
    const newToken = getRandomFourDigitNumber().toString();
    console.log(newToken)
    const resetTokenEntry = new ResetToken({ owner: user._id, token: newToken });
    await resetTokenEntry.save();
    // Add the appropriate implementation for sendMail based on your setup
    await sendMail(user.email, "Password Reset Token:", newToken);
    return res.send({
      success: true,
      message: "Check your email for code",
      resetCode: newToken // Include the reset code in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
ForgotRouter.post('/resetPassword', async (req, res) => {
    const { email, resetCode, password } = req.body;
//   if (!email || !resetCode || !password || !confirmPassword) {
//     return sendError(res, 'Please provide a valid email, reset code, password, and confirmPassword.');
//   }
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) { 
      return res.send({success: false,message: "User not found."});
    }
    const resetTokenEntry = await ResetToken.findOne({ owner: user.id });
    if (!resetTokenEntry) {
      return res.send({success: false,message: "User not Found"});
    }
    const isResetCodeValid = await resetTokenEntry.compareToken(resetCode);
    if (!isResetCodeValid) {
      return res.send({success: false,message: "Invalid Reset Code"});
    }
    // console.log(user.password)
    // user.password = password.trim();
    const hashedPassword = await  bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    const deleteResult = await ResetToken.deleteOne({ _id: resetTokenEntry._id });
    console.log("Delete result:", deleteResult);
    await sendMail(user.email, "Password Reset Succesfully",'This is a confirmation that the password for your account at our app has just been changed')
    // Send a success response
    res.send({
      success: true,
      message: `Password reset successfully`
    });  
  } catch (error) {
    // Handle the error and send an appropriate response
    console.error("Error during password reset:", error);
    res.status(500).json({
      success: false,
      message: "Failed to reset password"
    });
  }
  });
module.exports = ForgotRouter;


  