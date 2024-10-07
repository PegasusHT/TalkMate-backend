const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;