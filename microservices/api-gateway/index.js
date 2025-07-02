const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
require("dotenv").config();

app.use(
  "/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
  })
);

const port = process.env.PORT || process.env.ALTERNATIVE_PORT;
app.listen(port, () => console.log(`API Gateway running on port ${port}`));
