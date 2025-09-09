const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res, next) => {
  try {
    const cloudNativeArticles = await ArticleModel.find({
      category: "Cloud & Infrastructure (Azure)",
    }).sort({ createdAt: -1 });

    if (cloudNativeArticles.length === 0)
      return res.status(404).json({ error: "Ooops...no article found" });

    res.status(200).json(cloudNativeArticles);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
