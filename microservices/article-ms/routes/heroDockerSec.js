const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (req, res) => {
  const herDockerSec = await ArticleModel.find({
    category: "Docker & Containerization",
  }).limit(2);
  res.send(herDockerSec);
});

module.exports = router;
