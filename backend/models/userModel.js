const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  age: { type: Number },
  photo: { type: String },
  address: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
