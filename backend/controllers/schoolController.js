const School = require("../models/schoolModel");

const registerSchool = async (req, res) => {
  const { name, subName, code, affiCode, board, contact, email, address } =
    req.body;
  console.log(req.body);

  try {
    let photoObj = "";

    if (req.file && req.file.fieldname === "schoolPhoto") {
      photoObj = req.file.buffer.toString("base64");
    }

    const newSchool = new School({
      name,
      subName,
      code,
      affiCode,
      board,
      contact,
      email,
      address,
      school_photo: photoObj,
    });

    const savedSchool = await newSchool.save();

    res.status(201).json({
      message: "School registered successfully",
      data: savedSchool,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const schoolList = async (req, res) => {
  console.log("school");
  try {
    const schools = await School.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: schools,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerSchool, schoolList };
