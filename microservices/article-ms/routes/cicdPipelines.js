const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res) => {
  const cicdArticles = await ArticleModel.find({
    category: "CI/CD & Pipelines",
  })
    .sort({ createdAt: -1 })
    .limit(4);

  res.status(200).send(cicdArticles);
});

module.exports = router;
