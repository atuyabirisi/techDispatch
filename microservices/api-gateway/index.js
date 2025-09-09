require("dotenv").config();
const express = require("express");
const proxies = require("./proxy");
const logger = require("./utils/logger");

const app = express();
proxies(app);

const port = process.env.PORT || process.env.ALTERNATIVE_PORT;

app.listen(port, () => logger.info(`API Gateway running on port ${port}`));
