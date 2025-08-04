const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  let dbURL;

  switch (process.env.NODE_ENV) {
    case "test":
      dbURL = process.env.DB_URL_TEST;
      break;
    case "development":
      dbURL = process.env.DB_URL_DEV;
      break;
    default:
      dbURL = process.env.DB_URL_DEV;
  }

  try {
    mongoose.connect(dbURL);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
