const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
    trim: true,
    maxlength: [25, "Name must be 25 Ch Long"],
  },
  email: {
    type: String,
    require: [true, "Email is Required"],
    unique: true,
  },
  phone: {
    type: String,
    require: [true, "Phone is Required"],
    maxlength: [10, "Name must be 10 Ch Long"],
  },
  college: {
    type: String,
    require: [true, "College is Required"],
  },
  activity:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model("User", userSchema);
