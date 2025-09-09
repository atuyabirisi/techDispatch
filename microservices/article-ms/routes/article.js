const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArticleModel = require("../models/article");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./uploads");
  },
  filename: function (_req, file, cb) {
    const suffix = Date.now();

    cb(null, suffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("cover"), async (req, res, next) => {
  try {
    const { tittle, content, category } = req.body;

    const { filename } = req.file;

    const newArticle = new ArticleModel({
      tittle,
      category,
      content,
      cover: filename,
    });

    await newArticle.save();

    res.status(200).json({ message: "Article uploaded successfully" });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (_req, res) => {
  try {
    const articles = await ArticleModel.find().sort({ createdAt: -1 });

    if (!articles) return res.status(404).json({ error: "no article found" });

    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id == null) return res.status(400).send({ error: "ID is required" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).send({ error: "Invalid ID" });

    const singlePost = await ArticleModel.findById(id);

    if (!singlePost) return res.status(404).json({ error: "Post not found" });

    res.status(200).json(singlePost);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id == null) return res.status(400).json({ error: "ID is required" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ error: "Invalid ID" });

    const deletedPost = await ArticleModel.findByIdAndDelete(id);

    if (deletedPost === null)
      return res.status(404).json({ error: "Post not found" });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
