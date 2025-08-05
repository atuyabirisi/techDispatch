const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (req, res) => {
  const topPost = await ArticleModel.find().sort({ createdAt: -1 }).limit(1);
  res.send(topPost);
});

module.exports = router;
