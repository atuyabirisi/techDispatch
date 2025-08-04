require("dotenv").config();
const express = require("express");
const proxies = require("./proxy");

const app = express();
proxies(app);

const port = process.env.PORT || process.env.ALTERNATIVE_PORT;

app.listen(port, () => console.log(`API Gateway running on port ${port}`));
