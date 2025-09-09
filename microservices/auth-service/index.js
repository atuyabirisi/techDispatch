const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const { connectDB } = require("./dbconfig");
const signUpHandler = require("./routes/signUp");
const signInHandler = require("./routes/signIn");
const error = require("./utils/error");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/signup", signUpHandler);
app.use("/signin", signInHandler);

app.use(error);

const port = process.env.AUTH_SERVICE_PORT || 4001;

connectDB();

app.listen(port, () =>
  logger.info(`Auth-service server listening on port ${port}`)
);

module.exports = app;
