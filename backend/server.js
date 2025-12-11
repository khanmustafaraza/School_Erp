const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");
dotenv.config();

// !Admin  Module
const userRouter = require("./routes/userRoute");
const enquiryRouter = require("./routes/enquiryRoute");
// const classRouter = require("./routes/classRoute");
const classRouter = require("./routes/classRoute");
const classTeacherRouter = require("./routes/classTeacherRoute");
const studentRouter = require("./routes/studentRoute");
const verifyToken = require("./middlewares/tokenMiddleware");
const verifyAdmin = require("./middlewares/adminMiddleware");
const verifyTeacher = require("./middlewares/teacherMiddleware");
const verifyStudent = require("./middlewares/studentMiddleware");

// //  middlewares for authentication
// const verifyToken = require("./middlewares/tokenMiddleware");
// const verifyAdmin = require("./middlewares/adminMiddleware");
// todo configrue dotenv
// // Middlewares
app.use(express.json());
app.use(cors());

// Routes

// todo Admin Routes start  **********************
app.use("/api/enquiry", enquiryRouter);
app.use("/api/admin/user", userRouter);
app.use("/api/admin/class", classRouter);
app.use("/api/admin/classteacher", classTeacherRouter);
app.use("/api/admin/student", studentRouter);

// todo authentication  for admin
app.post("/api/auth/admin", verifyToken, verifyAdmin, (req, res) => {
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// todo authentication for teacher
app.post("/api/auth/teacher", verifyToken, verifyTeacher, (req, res) => {
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// todo authentication of students
app.post("/api/auth/student", verifyToken, verifyStudent, (req, res) => {
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// ! Home Page Route
app.get("/", (req, res) => {
  res.send(`<h1>Test file to Show Server is Running</h1>`);
});

const PORT = process.env.PORT || 5000;

// ! Configure Server With DataBase Connection

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
