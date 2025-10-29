const bcrypt = require("bcryptjs");

const generatePassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error.message);
    return null; // or throw error;
  }
};

const comparePassword = async (password, userHashedPassword) => {
  try {
    const isMatched = await bcrypt.compare(password, userHashedPassword);
    return isMatched;
  } catch (error) {
    console.error("Error comparing passwords:", error.message);
    return false; // or throw error;
  }
};

module.exports = { generatePassword, comparePassword };
