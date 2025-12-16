const ClassTeacher = require("../models/classTeacherModel");
const User = require("../models/userModel");
const Class = require("../models/classModel");

// ✅ Create Class Teacher
const createClassTeacher = async (req, res) => {
  try {
    const { userId, classId, academicYear, remarks } = req.body;
    console.log(userId)
    console.log(classId)

    // Validate user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "Invalid user ID",
      });
    }

    // Validate class exists
    const classObj = await Class.findById(classId);
    if (!classObj) {
      return res.status(400).json({ message: "Invalid class ID" });
    }

    // Check duplicate assignment
    const existing = await ClassTeacher.findOne({
      userId,
     
    });

    if (existing) {
      return res.status(400).json({
        message: "Teacher is already assigned to this class",
      });
    }

    const newAssignment = await ClassTeacher.create({
      userId,
      classId,
      academicYear,
      remarks,
    });

    res.status(201).json({
      message: "Class Teacher assigned successfully",
      data: newAssignment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};


// ✅ Get all class teacher assignments
const getAllClassTeachers = async (req, res) => {

  try {
    const result = await ClassTeacher.find()
      .populate("userId", "userName email")
      .populate("classId", "name section");
  

    res.status(200).json({success:true, count: result.length, data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get single class teacher by ID
const getClassTeacherById = async (req, res) => {
  try {
    const { id } = req.params;

    const teacher = await ClassTeacher.findById(id)
      .populate("userId", "fullName userName email")
      .populate("classId", "name section");

    if (!teacher)
      return res.status(404).json({ message: "Class Teacher not found" });

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update class teacher assignment
const updateClassTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await ClassTeacher.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated)
      return res.status(404).json({ message: "Class Teacher not found" });

    res.status(200).json({
      message: "Class Teacher updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete class teacher assignment
exports.deleteClassTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const removed = await ClassTeacher.findByIdAndDelete(id);

    if (!removed)
      return res.status(404).json({ message: "Class Teacher not found" });

    res.status(200).json({
      message: "Class Teacher removed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { createClassTeacher,getAllClassTeachers };
