const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log(
        `connection to database is successful ${conn.connection.host}`
      );
    }
  } catch (error) {
    console.log(`error while connecting to database ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
