const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please teel us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: true,
    trim: true,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    minlength: 8,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
