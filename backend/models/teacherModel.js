const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teacherSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // linked to user record (role: "teacher")
      required: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number, // in years
      default: 0,
    },
    salary: {
      type: Number,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },
    aadharCard: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfJoining: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "On Leave"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = model("Teacher", teacherSchema);
module.exports = Teacher;
