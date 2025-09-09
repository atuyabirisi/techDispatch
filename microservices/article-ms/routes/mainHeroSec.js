const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res, next) => {
  try {
    const post = await ArticleModel.findOne({
      category: "Cloud & Infrastructure (Azure)",
    })
      .sort({ createdAt: -1 })
      .limit(1);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
