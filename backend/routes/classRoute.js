const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

// Routes
router.post("/register", classController.classRegister); // Create class
router.put("/update/:id", classController.classUpdate); // Update class
router.get("/list", classController.classList); // Get all classes

module.exports = router;
