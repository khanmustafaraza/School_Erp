const Subject = require("../models/subject-model");

const createSubject = async (req, res) => {
  try {
    const { name } = req.body;

    // 1. Validate input
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Subject name is required",
      });
    }

    // 2. Check if subject already exists (optional but good practice)
    const existingSubject = await Subject.findOne({ name: name.trim() });
    if (existingSubject) {
      return res.status(409).json({
        success: false,
        message: "Subject already exists",
      });
    }

    // 3. Create and save new subject
    const newSubject = new Subject({ name: name.trim() });
    await newSubject.save();

    // 4. Send success response
    res.status(201).json({
      success: true,
      message: "Subject created successfully",
      subject: newSubject,
    });
  } catch (error) {
    console.error("Create subject error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while creating subject",
      error: error.message,
    });
  }
};

module.exports = createSubject;


const Subject = require("../models/subject-model");

const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().sort({ name: 1 }); // sort alphabetically by name

    res.status(200).json({
      success: true,
      count: subjects.length,
      subjects,
    });
  } catch (error) {
    console.error("Error fetching subjects:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching subjects",
    });
  }
};


module.exports = getAllSubjects;

const Subject = require("../models/subject-model");

const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // 1. Validate input
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Subject name is required",
      });
    }

    // 2. Optional: Check for duplicate name
    const duplicate = await Subject.findOne({ name: name.trim() });
    if (duplicate && duplicate._id.toString() !== id) {
      return res.status(409).json({
        success: false,
        message: "Another subject with the same name already exists",
      });
    }

    // 3. Update subject using findByIdAndUpdate
    const updatedSubject = await Subject.findByIdAndUpdate(
      id,
      { name: name.trim() },
      { new: true, runValidators: true }
    );

    // 4. If subject not found
    if (!updatedSubject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    // 5. Success
    res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      subject: updatedSubject,
    });

  } catch (error) {
    console.error("Update subject error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while updating subject",
    });
  }
};

module.exports = updateSubject;

const Subject = require("../models/subject-model");

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Check if the subject exists
    const subject = await Subject.findById(id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject not found",
      });
    }

    // 2. Delete the subject
    await Subject.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Subject deleted successfully",
    });
  } catch (error) {
    console.error("Delete subject error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while deleting subject",
    });
  }
};

module.exports = deleteSubject;

