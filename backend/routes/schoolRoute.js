const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const multer = require("multer");

// 1️⃣ Configure multer storage
const storage = multer.memoryStorage();

const upload = multer({ storage });

// 2️⃣ Routes
router.post(
  "/register",
  upload.single("schoolPhoto"),
  schoolController.registerSchool
);
router.get("/school-list",schoolController.schoolList)

module.exports = router;
