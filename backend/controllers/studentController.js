const Class = require("../models/classModel");
const User = require("../models/userModel");
const ClassTeacher = require("../models/classTeacherModel");
const Student = require("../models/studentModel");

const studentRegister = async (req, res) => {
  try {
    const { userId, classId } = req.body;

    if (!userId || !classId) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const teacher = await ClassTeacher.findOne({ classId: classId });

    const newStudent = new Student({
      userId,
      classId,
      teacherId: teacher._id,
    });
    await newStudent.save();
    return res.status(201).json({
      success: true,
      message: "Student Created Successfylly",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

const classUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format before using it in a query
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid class ID format",
      });
    }

    const updatedClass = await Class.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true } // runValidators ensures schema rules apply
    );

    if (!updatedClass) {
      return res.status(404).json({
        success: false,
        message: "Class not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: updatedClass,
    });
  } catch (error) {
    console.error("Error updating class:", error);
    res.status(500).json({
      success: false,
      message: "Error updating class. Please try again later.",
      error: error.message,
    });
  }
};

const studentList = async (req, res) => {
  try {
    const students = await Student.aggregate([
      // 🧩 Join user info
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },

      // 🏫 Join class info
      {
        $lookup: {
          from: "classes",
          localField: "classId",
          foreignField: "_id",
          as: "class",
        },
      },
      { $unwind: { path: "$class", preserveNullAndEmptyArrays: true } },

      // 👨‍🏫 Join class teacher info
      {
        $lookup: {
          from: "classteachers",
          localField: "classId",
          foreignField: "classId",
          as: "classTeacher",
        },
      },
      { $unwind: { path: "$classTeacher", preserveNullAndEmptyArrays: true } },

      // 🧹 Remove duplicates by grouping by student _id
      {
        $group: {
          _id: "$_id",
          student: { $first: "$$ROOT" },
        },
      },

      // 🧾 Flatten back to a simple object
      {
        $replaceRoot: { newRoot: "$student" },
      },

      // ✨ Optional: Sort by created date
      { $sort: { createdAt: -1 } },
    ]);

    res.status(200).json({
      success: true,
      message: "All students fetched successfully",
      data: students,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  studentRegister,
  studentList,
};
