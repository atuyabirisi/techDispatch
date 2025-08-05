const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (req, res) => {
  const cicdArticles = await ArticleModel.find({
    category: "CI/CD & Pipelines",
  }).limit(4);
  res.send(cicdArticles);
});

module.exports = router;
