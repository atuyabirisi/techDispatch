const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (req, res) => {
  const posts = await ArticleModel.findOne({
    category: "Cloud & Infrastructure (Azure)",
  })
    .sort({ createdAt: -1 })
    .limit(1);
  res.send(posts);
});

module.exports = router;
