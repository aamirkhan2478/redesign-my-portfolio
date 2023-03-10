const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

// Generate JWT Token
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, name: this.name }, process.env.SECRET, {
    expiresIn: "24h",
  });
};

//Encryt Password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  if (this.isModified("secret")) {
    this.secret = await bcrypt.hash(this.secret, 12);
  }
  next();
});

mongoose.models = {};
module.exports = mongoose.model("User", userSchema);
