const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const closeDbConnection = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB, closeDbConnection };
