const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Routes
router.post("/register", studentController.studentRegister); // Create class
// router.put("/update/:id", classController.classUpdate); // Update class
router.get("/student-list", studentController.studentList); // Get all classes

module.exports = router;
