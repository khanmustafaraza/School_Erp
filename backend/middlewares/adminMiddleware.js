const User = require("../models/userModel");

const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;
    // depends on your JWT structure

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No user ID found in request",
      });
    }

    const adminUser = await User.findById(userId);

    if (!adminUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!(adminUser.isAdmin && adminUser.role == "admin")) {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admins only",
      });
    }

    next(); // User is admin, proceed
  } catch (error) {
    console.error("Admin verification error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error during admin verification",
    });
  }
};

module.exports = verifyAdmin;
