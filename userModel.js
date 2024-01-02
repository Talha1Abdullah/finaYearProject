const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  verified: {
    type: Boolean,
    default: false,
  },
  subscribed: {
    type: Boolean,
    default: false,
  },
  subscriptionId: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
