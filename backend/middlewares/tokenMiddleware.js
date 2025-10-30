const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY; // Replace with env var in production

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Token is not provided or invalid format",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, SECRET_KEY); // Throws if invalid
    req.user = decoded; // Attach user data to request
    next(); // Proceed to next middleware

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};
// At the end of your file
module.exports = verifyToken;
