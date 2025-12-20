const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes


router.post("/register", upload.single("photo"), studentController.registerStudent); // Create class
// router.put("/update/:id", classController.classUpdate); // Update class
router.get("/student-list", studentController.getAllStudentsList); // Get all classes

router.get("/class-student-list/:classId",studentController.getStudentsListByClassId)

module.exports = router;
