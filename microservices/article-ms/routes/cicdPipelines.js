const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res, next) => {
  try {
    const cicdArticles = await ArticleModel.find({
      category: "CI/CD & Pipelines",
    }).sort({ createdAt: -1 });

    if (cicdArticles.length === 0)
      return res.status(404).json({ error: "Ooops...no article found" });

    res.status(200).json(cicdArticles);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
