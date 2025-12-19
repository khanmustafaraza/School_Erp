const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    // 👩‍🏫 Teacher assigned to this student
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🏫 Class assigned to this student
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    // 👨‍🏫 ClassTeacher reference
    classTeacherId: {
      type: Schema.Types.ObjectId,
      ref: "ClassTeacher",
      required: true,
    },

    // 🧑‍🎓 Student info
    fullName: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true, trim: true },
    studentPhotoObj: { }, // store image path or URL

    // optional fields
    remarks: { type: String, trim: true },
  },
  { timestamps: true }
);

const Student = model("Student", studentSchema);
module.exports = Student;
