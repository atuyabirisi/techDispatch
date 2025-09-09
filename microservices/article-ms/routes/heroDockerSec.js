const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/article");

router.get("/", async (_req, res, next) => {
  try {
    const herDockerSec = await ArticleModel.find({
      category: "Docker & Containerization",
    }).limit(2);

    res.status(200).json(herDockerSec);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
