const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
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
    await mongoose.connect(dbURL);
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

module.exports = { connectToDB, closeDbConnection };
