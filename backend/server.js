const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");
dotenv.config();

// !Admin  Module
const userRouter = require("./routes/userRoute");
// const classRouter = require("./routes/classRoute");
const classRouter = require("./routes/classRoute");
const classTeacherRouter = require("./routes/classTeacherRoute");
const studentRouter = require("./routes/studentRoute");
// todo configrue dotenv
// // Middlewares
app.use(express.json());
app.use(cors());

// Routes

// todo Admin Routes start  **********************
app.use("/api/admin/user", userRouter);
app.use("/api/admin/class", classRouter);
app.use("/api/admin/classteacher", classTeacherRouter);
app.use("/api/admin/student", studentRouter);

// ! Home Page Route
app.get("/", (req, res) => {
  res.send(`<h1>Test file to Show Server is Running</h1>`);
});

const PORT = process.env.PORT || 3000;

// ! Configure Server With DataBase Connection

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
