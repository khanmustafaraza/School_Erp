const errorMiddleware = (err, req, res, next) => {
  console.error("Error:", err.stack || err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    // Only in dev mode, not in production:
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorMiddleware;

// middleware/errorMiddleware.js
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
