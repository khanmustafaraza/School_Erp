const Student = require("../models/studentModel");

const registerStudent = async (req, res) => {
  try {
    const {
      userId,
      classId,
      classTeacherId,
      fullName,
      fatherName,
      phone,
      dob,
      address,
      photo,
    } = req.body;
   
    const photoObj = {
      photoName:req.file.originalname,
      photoType:req.file.mimetype,
      photoData:req.file.buffer.toString("base64")
    }
    

    // Validation (optional)
    if (!userId || !classId || !classTeacherId) {
      return res.status(400).json({ message: "Teacher or class info missing" });
    }

    const newStudent = await Student.create({
      userId,
      classId,
      classTeacherId,
      fullName,
      fatherName,
      phone,
      dob,
      address,
      studentPhotoObj:photoObj
      
    });

    res.status(201).json({
      message: "Student registered successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getAllStudentsList = async (req, res) => {

  try {
    const result = await Student.find()
      .populate("userId", "userName email")
      .populate("classId")
      .populate("classTeacherId",{classId:0,userId:0});
  


     
    res.status(200).json({success:true, count: result.length, data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const getStudentDetailById = async (req, res) => {

  try {
    const result = await Student.findById({_id:req.params.id})
      .populate("userId", "userName email")
      .populate("classId")
      .populate("classTeacherId",{classId:0,userId:0});
  


    
    res.status(200).json({success:true, count: result.length, data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const getStudentDetailByUserId = async (req, res) => {
  const id = req.user._id

  try {
    const result = await Student.findOne({userId:id})
      .populate("userId", "userName email")
      .populate("classId")
      .populate("classTeacherId",{classId:0,userId:0});
  



    res.status(200).json({success:true, count: result.length, data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
const getStudentsDetailByClassId = async (req, res) => {
  const id = req.params.id

  try {
    const result = await Student.find({classId:id})
      .populate("userId", "userName email")
      .populate("classId")
      .populate("classTeacherId",{classId:0,userId:0});
  


     
    res.status(200).json({success:true, count: result.length, data: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


module.exports = { registerStudent,getAllStudentsList };
