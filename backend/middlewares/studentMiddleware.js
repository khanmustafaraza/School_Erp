const User = require("../models/userModel");

const verifyStudent = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No user ID found in request",
      });
    }

    const studentUser = await User.findById(userId);

    if (!studentUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!(studentUser && studentUser.role == "student")) {
      return res.status(403).json({
        success: false,
        message: "Access denied: Student only",
      });
    }

    next(); // User is admin, proceed
  } catch (error) {
    console.error("Admin verification error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error during student verification",
    });
  }
};

module.exports = verifyStudent;
