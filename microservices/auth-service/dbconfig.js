const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  let dbUrl;

  switch (process.env.NODE_ENV) {
    case "test":
      dbUrl = process.env.DB_URL_TEST;
      break;
    case "production":
      dbUrl = process.env.DB_URL_PRODUCTION;
      break;
    default:
      dbUrl = process.env.DB_URL_DEV;
  }

  try {
    mongoose.connect(dbUrl);
  } catch (error) {
    console.log(error.message);
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
