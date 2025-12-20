const { Schema, model } = require("mongoose");

const attendanceSchema = new Schema(
  {
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    // Frontend sends: new Date()
    // Stored in MongoDB as: ISODate(...)
    date: {
      type: Date,
      required: true,
    },

    attendanceArr: [
      {
        studentId: {
          type: Schema.Types.ObjectId,
          ref: "Student", // or "Student"
          required: true,
        },
        status: {
          type: String,
          enum: ["present", "absent", "leave"],
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

/**
 * Prevent duplicate attendance for same class & same day
 */
// attendanceSchema.index({ classId: 1, date: 1 }, { unique: true });

const Attendance = model("Attendance", attendanceSchema);
module.exports = Attendance;
