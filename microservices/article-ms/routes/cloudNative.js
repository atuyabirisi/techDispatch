const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res) => {
  const cloudNativeArticles = await ArticleModel.find({
    category: "Cloud & Infrastructure (Azure)",
  }).sort({ createdAt: -1 });

  res.status(200).send(cloudNativeArticles);
});

module.exports = router;
