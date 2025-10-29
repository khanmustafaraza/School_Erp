const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "teacher", "student", "parent"],
      default: "admin",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
