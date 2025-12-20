const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Routes
router.post("/mark-attendance", attendanceController.markAttendance); // Create class
// router.put("/update/:id", classController.classUpdate); // Update class
router.get(
  "/mark-attendance-list/:classId",
  attendanceController.getAttendanceRegisterByClass
); // Get all classes

module.exports = router;
