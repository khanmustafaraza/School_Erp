const User = require("../models/userModel");
const { generatePassword, comparePassword } = require("../utlis/password");
const generateToken = require("../utlis/token");

const userRegister = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    // console.log(req.body);
    if (!userName || !email || !password || !role) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const exsistUser = await User.findOne({ email });
    if (exsistUser) {
      return res.status(403).json({
        success: false,
        message: "User Already Exsist",
      });
    }
    const hashedPassword = await generatePassword(password);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "Account Created Successfylly",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const exsistUser = await User.findOne({
      $or: [{ email }, { userName: email }],
    });

    if (!exsistUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email/Username or Password",
      });
    }

    const passwordMatched = await comparePassword(
      password,
      exsistUser.password
    );
    if (!passwordMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email/Username or Password",
      });
    }

    if (role !== exsistUser.role) {
      return res.status(400).json({
        success: false,
        message: "Invalid Role Selected",
      });
    }

    let setRole = false;
    const token = generateToken({
      _id: exsistUser._id,
      role: exsistUser.role,
      userName: exsistUser.userName,
    });

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      data: {
        token,
        role: exsistUser.role,
        userName: exsistUser.userName,
        setRole: true,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while login due to network",
    });
  }
};

const userUpdate = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};
const userDelete = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

const userList = async (req, res) => {
  try {
    const users = await User.find();

    // console.log(admins);
    if (!users) {
      return res.status(400).json({
        success: false,
        message: `Error While Fechting`,
      });
    }
    return res.status(400).json({
      success: true,
      message: `All User Fectched Successfully`,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userUpdate,
  userDelete,
  userList,
};
