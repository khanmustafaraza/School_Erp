const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);
router.put("/update-user/:id", userController.userUpdate);
router.get("/admin-list", userController.adminList);
router.get("/teacher-list", userController.teacherList);
router.get("/student-list", userController.studentList);

module.exports = router;
