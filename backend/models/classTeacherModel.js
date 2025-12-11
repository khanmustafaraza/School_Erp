const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const classTeacherSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    academicYear: {
      type: String,
      required: true,
      default: "2024-2025",
    },

    // isClassInCharge: {
    //   type: Boolean,
    //   default: false,
    // },

    // mainSubject: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Subject",
    // },

    // assignmentType: {
    //   type: String,
    //   enum: ["class-teacher", "co-teacher", "subject-teacher"],
    //   default: "class-teacher",
    // },

    // assignedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },

    status: {
      type: String,
      enum: ["active", "transferred", "inactive"],
      default: "active",
    },

    // studentLimit: {
    //   type: Number,
    //   default: 60,
    // },

    // timetableId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Timetable",
    // },

    remarks: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const ClassTeacher = model("ClassTeacher", classTeacherSchema);
module.exports = ClassTeacher;
