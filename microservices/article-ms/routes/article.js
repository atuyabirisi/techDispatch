const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArticleModel = require("../models/article");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const suffix = Date.now();

    cb(null, suffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("cover"), async (req, res) => {
  const { tittle, content, category } = req.body;

  const { filename } = req.file;

  const newArticle = new ArticleModel({
    tittle,
    category,
    content,
    cover: filename,
  });

  await newArticle.save();

  res.status(200).send("Article uploaded successfully");
});

router.get("/", async (_req, res) => {
  const articles = await ArticleModel.find().sort({ createdAt: -1 });

  if (!articles) return res.status(404).send({ error: "no article found" });

  res.send(articles);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send({ error: "Invalid ID" });

  const singlePost = await ArticleModel.findById(id);

  if (!singlePost) return res.status(404).send({ error: "Post not found" });

  res.send(singlePost);
});

module.exports = router;
