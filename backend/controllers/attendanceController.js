const Attendance = require("../models/attendanceModel");

const markAttendance = async (req, res) => {
  try {
    const { classId, date, attendanceArr } = req.body;

    if (!classId || !date || !attendanceArr?.length) {
      return res.status(400).json({
        success: false,
        message: "Class, date and attendance are required",
      });
    }

    // Normalize date (remove time)
    const attendanceDate = new Date(date);
    attendanceDate.setHours(0, 0, 0, 0);

    // Check duplicate attendance
    const exists = await Attendance.findOne({
      classId,
      date: attendanceDate,
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Attendance already marked for this class and date",
      });
    }

    const attendance = await Attendance.create({
      classId,
      date: attendanceDate,
      attendanceArr,
    });

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      data: attendance,
    });
  } catch (error) {
    console.error("Mark Attendance Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getAttendanceRegisterByClass = async (req, res) => {
  try {
    const data = await Attendance.find({ classId: req.params.classId })
      .populate("attendanceArr.studentId", "fullName")
      .sort({ date: 1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { markAttendance, getAttendanceRegisterByClass };
