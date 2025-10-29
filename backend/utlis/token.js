const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
console.log(SECRET_KEY);

const generateToken = (payload) => {
  console.log(payload);
  try {
    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined in environment variables.");
    }

    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    return null; // or throw error if you want to handle it upstream
  }
};

module.exports = generateToken;
