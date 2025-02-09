const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
      minLength: [3, "Last Name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    minLength: [5, "Email must be at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

// Static method for password hashing
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// Instance method for generating JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

// Instance method for password comparison
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
