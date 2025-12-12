const Student = require("../models/studentModel");

const registerStudent = async (req, res) => {
  try {
    const {
      userId,
      classId,
      teacherId,
      fullName,
      fatherName,
      phone,
      dob,
      address,
      photo,
    } = req.body;

    // Validation (optional)
    if (!userId || !classId || !teacherId) {
      return res.status(400).json({ message: "Teacher or class info missing" });
    }

    const newStudent = await Student.create({
      userId,
      classId,
      teacherId,
      fullName,
      fatherName,
      phone,
      dob,
      address,
      photo,
    });

    res.status(201).json({
      message: "Student registered successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { registerStudent };
