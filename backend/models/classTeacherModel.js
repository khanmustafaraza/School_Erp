const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const classTeacherSchema = new Schema(
  {
    // 👩‍🏫 The teacher (User with role: "teacher")
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🏫 The class assigned to this teacher
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    // // 📘 Subject taught by the teacher in this class
    // subject: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },

    // // 📅 Academic year (e.g. 2024–2025)
    // academicYear: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },

    // // 📆 When the teacher was assigned to this class
    // assignedDate: {
    //   type: Date,
    //   default: Date.now,
    // },

    // // ✅ Whether teacher is currently handling this class
    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },

    // // 🗒️ Notes or extra remarks (optional)
    // remarks: {
    //   type: String,
    //   trim: true,
    // },
  },
  {
    timestamps: true,
  }
);

// Model creation
const ClassTeacher = model("ClassTeacher", classTeacherSchema);

module.exports = ClassTeacher;
