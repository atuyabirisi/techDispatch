const express = require("express");
const router = express.Router();
const multer = require("multer");
const ArticleModel = require("../models/article");

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

module.exports = router;
